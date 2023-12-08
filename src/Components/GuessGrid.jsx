import Letter from "./Letter";
export default function GuessGrid(g) {
  return (
    <div id="board" className="grid justify-center items-center gap-1 ">
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={0} />
        <Letter letterPos={1} attemptValue={0} />
        <Letter letterPos={2} attemptValue={0} />
        <Letter letterPos={3} attemptValue={0} />
        <Letter letterPos={4} attemptValue={0} />
      </div>
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={1} />
        <Letter letterPos={1} attemptValue={1} />
        <Letter letterPos={2} attemptValue={1} />
        <Letter letterPos={3} attemptValue={1} />
        <Letter letterPos={4} attemptValue={1} />
      </div>
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={2} />
        <Letter letterPos={1} attemptValue={2} />
        <Letter letterPos={2} attemptValue={2} />
        <Letter letterPos={3} attemptValue={2} />
        <Letter letterPos={4} attemptValue={2} />
      </div>
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={3} />
        <Letter letterPos={1} attemptValue={3} />
        <Letter letterPos={2} attemptValue={3} />
        <Letter letterPos={3} attemptValue={3} />
        <Letter letterPos={4} attemptValue={3} />
      </div>
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={4} />
        <Letter letterPos={1} attemptValue={4} />
        <Letter letterPos={2} attemptValue={4} />
        <Letter letterPos={3} attemptValue={4} />
        <Letter letterPos={4} attemptValue={4} />
      </div>
      <div id="row" className="flex gap-1">
        <Letter letterPos={0} attemptValue={5} />
        <Letter letterPos={1} attemptValue={5} />
        <Letter letterPos={2} attemptValue={5} />
        <Letter letterPos={3} attemptValue={5} />
        <Letter letterPos={4} attemptValue={5} />
      </div>
    </div>
  );
}
