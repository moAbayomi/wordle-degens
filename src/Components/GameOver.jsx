import { useBoard } from "./BoardProvider";
export default function () {
  const { attempt } = useBoard();
  return (
    <div className="text-center flex justify-center items-center my-6">
      <h1 className="text-white text-2xl text-underline uppercase">
        Game results
      </h1>
      <p>Number of guesses : {attempt}</p>
    </div>
  );
}
