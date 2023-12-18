import Keyboard from "./Components/Keyboard";
import GuessGrid from "./Components/GuessGrid";
import { useBoard } from "./Components/BoardProvider";

function App() {
  const { attempt, gameDone, wordGuessed } = useBoard();

  console.log(gameDone, wordGuessed);
  return (
    <div className="flex flex-col gap-6 items-center h-[100vh] bg-black-def">
      <header className="text-white py-6 border-1 mx-auto w-full text-center font-bold text-3xl">
        <h1>WORDLE</h1>
      </header>
      <main className="grid gap-2 relative">
        <GuessGrid />
        <Keyboard />
        {attempt >= 5 && gameDone && wordGuessed ? (
          <div className="fixed flex flex-col gap-4 justify-center items-center bg-white top-[15vh] left-[25vw] right-[25vw] bottom-[15vh] opacity-60">
            <p className="animate-bounce text-4xl uppercase">you win</p>
            <button className="text-3xl text-white rounded-md hover:scale-110 transition-all bg-green-def px-12 py-4 uppercase">
              play again
            </button>
          </div>
        ) : attempt >= 5 && gameDone && !wordGuessed ? (
          <div className="fixed flex flex-col gap-4 justify-center items-center bg-white top-[15vh] left-[25vw] right-[25vw] bottom-[15vh] opacity-60">
            <p className="animate-bounce text-4xl uppercase">you lose</p>
            <button className="text-3xl text-white rounded-md hover:scale-110 transition-all bg-gray-def px-12 py-4 uppercase">
              play again
            </button>

            <button>play again</button>
          </div>
        ) : (
          <p className="text-white"></p>
        )}
      </main>
    </div>
  );
}

export default App;
