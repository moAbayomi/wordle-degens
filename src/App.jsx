import Keyboard from "./Components/Keyboard";
import GuessGrid from "./Components/GuessGrid";
function App() {
  return (
    <div className="flex flex-col gap-6 items-center h-[100vh] bg-black">
      <header className="text-white py-6 border-1 mx-auto w-full text-center font-bold text-3xl">
        <h1>WORDLE</h1>
      </header>
      <main className="grid gap-2">
        <GuessGrid />
        <Keyboard />
      </main>
    </div>
  );
}

export default App;