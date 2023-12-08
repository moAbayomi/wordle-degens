import { useBoard } from "./BoardProvider";
export default function Letter({ letterPos, attemptValue }) {
  const { words, attempt, rightWord } = useBoard();
  const word = words[attemptValue][letterPos];
  const correct = rightWord[letterPos] == word;
  const almost = !correct && word !== "" && rightWord.includes(word);

  const letterState =
    attempt > attemptValue &&
    (correct ? "bg-green-400" : almost ? "bg-yellow-400" : "bg-gray-700");

  const correctState = attempt > attemptValue && correct && "animation-bounce";

  return (
    <div
      className={`text-2xl font-bold p-6 h-16 w-16 flex justify-center ${
        correctState ? correctState : ""
      } items-center ${letterState ? letterState : "bg-gray-400 "}`}
    >
      {word}
    </div>
  );
}
