import React, { createContext, useContext, useState } from "react";
import { wordsDefault } from "../Words";

const BoardContext = createContext();

export const useBoard = () => useContext(BoardContext);

export default function BoardProvider({ children }) {
  const rightWord = "WRONG";
  const [words, setWords] = useState(wordsDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const { attempt, letterPos } = currAttempt;

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

  function onEnter() {
    if (letterPos < 4) return;
    setCurrAttempt({ ...currAttempt, attempt: attempt + 1, letterPos: 0 });
  }
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
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
