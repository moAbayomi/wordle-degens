import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { wordsDefault, generateWordsSet } from "../Words";

const BoardContext = createContext();

export const useBoard = () => useContext(BoardContext);

export default function BoardProvider({ children }) {
  const [words, setWords] = useState(wordsDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [disabledLetter, setDisabledLetter] = useState([]);
  const [correctLetter, setCorrectLetter] = useState([]);
  const { attempt, letterPos } = currAttempt;
  const letterEl = useRef();

  const row1 = useRef();
  const row2 = useRef();
  const row3 = useRef();
  const row4 = useRef();
  const row5 = useRef();
  const row6 = useRef();

  const [wordSet, setWordSet] = useState(new Set());
  const [rightWord, setRightWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    wordGuessed: false,
  });
  useEffect(() => {
    generateWordsSet().then((result) => {
      console.log(result);
      setRightWord(result.todayWord.toUpperCase());
      setWordSet(result.wordsSet);
    });
  }, []);

  function onSelectKey(key) {
    if (letterPos > 4) return;
    const newBoard = [...words];
    newBoard[attempt][letterPos] = key;
    setCurrAttempt({ ...currAttempt, letterPos: letterPos + 1 });
    setWords(newBoard);
  }

  function onDelete() {
    if (letterPos < 0) return;
    const newBoard = [...words];
    newBoard[attempt][letterPos - 1] = "";
    setCurrAttempt({ ...currAttempt, letterPos: letterPos - 1 });
    setWords(newBoard);
  }

  const triggerAnimation = (ref) => {
    console.log("ayay");
    if (ref.current) {
      Array.from(ref.current.children).forEach((box, index) => {
        setTimeout(() => {
          box.classList.add("animate-flip");
          if (box.textContent == rightWord[index]) {
            setTimeout(() => {
              box.classList.add("bg-green-def");
            }, 500);
          } else if (
            rightWord.includes(box.textContent) &&
            box.textContent !== "" &&
            box.textContent !== rightWord[index]
          ) {
            setTimeout(() => {
              box.classList.add("bg-yellow-def");
            }, 500);
          } else {
            setTimeout(() => {
              box.classList.add("bg-gray-def");
            }, 500);
          }
        }, index * 500); // Delay each animation by 500ms
      });

      setTimeout(() => {
        Array.from(ref.current.children).forEach((box) => {
          box.classList.remove("animate-flip");
        });
      }, ref.current.children.length * 500); // Remove the animation class after all animations have completed
    }
  };
  const onEnter = function () {
    if (letterPos !== 5) return;

    let curWord = "";

    for (let i = 0; i < 5; i++) {
      curWord += words[attempt][i];
    }
    const correct = rightWord[letterPos] == curWord;
    const almost = !correct && curWord !== "" && rightWord.includes(curWord);

    if (wordSet.has(curWord.toLowerCase())) {
      if (attempt == 0) {
        triggerAnimation(row1);
      } else if (attempt == 1) {
        triggerAnimation(row2);
      } else if (attempt == 2) {
        triggerAnimation(row3);
      } else if (attempt == 3) {
        triggerAnimation(row4);
      } else if (attempt == 4) {
        triggerAnimation(row5);
      } else {
        triggerAnimation(row6);
      }
      setCurrAttempt({ attempt: attempt + 1, letterPos: 0 });
    }
    if (
      rightWord.split("").every((letter, i) => {
        return letter === curWord[i];
      })
    ) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (attempt == 5) {
      alert("you loser");
      setGameOver({ gameOver: true, guessedGame: false });
    }
  };

  return (
    <BoardContext.Provider
      value={{
        words,
        setWords,
        onSelectKey,
        onDelete,
        onEnter,
        rightWord,
        attempt,
        letterPos,
        disabledLetter,
        setDisabledLetter,
        correctLetter,
        setCorrectLetter,
        letterEl,
        gameOver,
        setGameOver,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
