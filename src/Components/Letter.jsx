import { useEffect } from "react";
import { useBoard } from "./BoardProvider";
export default function Letter({ letterPos, attemptValue }) {
  const {
    words,
    attempt,
    rightWord,
    disabledLetter,
    setDisabledLetter,
    correctLetter,
    setCorrectLetter,
    letterEl,
  } = useBoard();
  const word = words[attemptValue][letterPos];
  const correct = rightWord[letterPos] == word;
  const almost = !correct && word !== "" && rightWord.includes(word);

  useEffect(() => {
    if (word !== "" && !correct && !almost) {
      setDisabledLetter((disabledLetter) => [...disabledLetter, word]);
    }

    if (word !== "" && correct) {
      setCorrectLetter((correctLetter) => [...correctLetter, word]);
    }
  }, [attempt]);

  const letterState =
    attempt > attemptValue &&
    (correct
      ? "bg-green-def border-none animate-bounce"
      : almost
      ? "bg-yellow-def border-none"
      : "bg-gray-def border-none");

  return (
    <div
      ref={letterEl}
      className={`text-3xl font-bold p-6 h-16 w-16 flex text-white justify-center items-center border border-gray-600 ${
        letterState ? letterState : "bg-black-def "
      }`}
    >
      {word}
    </div>
  );
}
