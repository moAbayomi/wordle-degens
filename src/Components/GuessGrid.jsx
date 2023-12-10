import { useBoard } from "./BoardProvider";
import Letter from "./Letter";
export default function GuessGrid() {
  const { row1, row2, row3, row4, row5, row6 } = useBoard();
  return (
    <div id="board" className="grid justify-center items-center gap-1 ">
      <div id="row" ref={row1} className="flex gap-1">
        <Letter letterPos={0} attemptValue={0} />
        <Letter letterPos={1} attemptValue={0} />
        <Letter letterPos={2} attemptValue={0} />
        <Letter letterPos={3} attemptValue={0} />
        <Letter letterPos={4} attemptValue={0} />
      </div>
      <div id="row" ref={row2} className="flex gap-1">
        <Letter letterPos={0} attemptValue={1} />
        <Letter letterPos={1} attemptValue={1} />
        <Letter letterPos={2} attemptValue={1} />
        <Letter letterPos={3} attemptValue={1} />
        <Letter letterPos={4} attemptValue={1} />
      </div>
      <div id="row" ref={row3} className="flex gap-1">
        <Letter letterPos={0} attemptValue={2} />
        <Letter letterPos={1} attemptValue={2} />
        <Letter letterPos={2} attemptValue={2} />
        <Letter letterPos={3} attemptValue={2} />
        <Letter letterPos={4} attemptValue={2} />
      </div>
      <div id="row" ref={row4} className="flex gap-1">
        <Letter letterPos={0} attemptValue={3} />
        <Letter letterPos={1} attemptValue={3} />
        <Letter letterPos={2} attemptValue={3} />
        <Letter letterPos={3} attemptValue={3} />
        <Letter letterPos={4} attemptValue={3} />
      </div>
      <div id="row" ref={row5} className="flex gap-1">
        <Letter letterPos={0} attemptValue={4} />
        <Letter letterPos={1} attemptValue={4} />
        <Letter letterPos={2} attemptValue={4} />
        <Letter letterPos={3} attemptValue={4} />
        <Letter letterPos={4} attemptValue={4} />
      </div>
      <div id="row" ref={row6} className="flex gap-1">
        <Letter letterPos={0} attemptValue={5} />
        <Letter letterPos={1} attemptValue={5} />
        <Letter letterPos={2} attemptValue={5} />
        <Letter letterPos={3} attemptValue={5} />
        <Letter letterPos={4} attemptValue={5} />
      </div>
    </div>
  );
}
