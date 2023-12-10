import { useEffect } from "react";
import { useBoard } from "./BoardProvider";
export default function Letter({ letterPos, attemptValue }) {
  const {
    words,
    attempt,
    rightWord,
    disabledLetter,
    setDisabledLetter,
    letterEl,
  } = useBoard();
  const word = words[attemptValue][letterPos];
  const correct = rightWord[letterPos] == word;
  const almost = !correct && word !== "" && rightWord.includes(word);

  useEffect(() => {
    if (word !== "" && !correct && !almost) {
      setDisabledLetter((word) => [...disabledLetter, word]);
    }
  }, [attempt]);

  const letterState =
    attempt > attemptValue &&
    (correct
      ? "bg-green-400 animate-bounce"
      : almost
      ? "bg-yellow-400"
      : "bg-gray-700");

  return (
    <div
      ref={letterEl}
      className={`text-2xl font-bold p-6 h-16 w-16 flex  justify-center items-center ${
        letterState ? letterState : "bg-gray-400 "
      }`}
    >
      {word}
    </div>
  );
}
