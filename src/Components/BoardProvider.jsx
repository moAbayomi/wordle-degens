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

  const onEnter = function () {
    if (letterPos !== 5) return;

    let curWord = "";

    for (let i = 0; i < 5; i++) {
      curWord += words[attempt][i];
    }

    console.log(row1.current.children);

    console.log(words[attempt]);

    if (wordSet.has(curWord.toLowerCase())) {
      setCurrAttempt({ attempt: attempt + 1, letterPos: 0 });
    }
    if (
      rightWord.split("").every((letter, i) => {
        return letter === curWord[i];
      })
    ) {
      console.log("aayay");
      setCurrAttempt({ attempt: 6, letterPos: 5 });
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
        letterEl,
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
