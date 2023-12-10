import { useBoard } from "./BoardProvider";
import { useEffect, useCallback } from "react";

export default function Key({ keyVal, bigkey }) {
  const { onSelectKey, onDelete, onEnter, disabledLetter } = useBoard();
  function selectKey(key) {
    if (key == "ENTER") {
      onEnter();
    } else if (key.type == "svg") {
      onDelete();
    } else {
      onSelectKey(keyVal);
    }
  }

  const handleKeyBoard = useCallback((event) => {
    if (event.key == "Enter") {
      onEnter();
    } else if (event.key == "Backspace" || event.Key == "Delete") {
      onDelete();
    } else if (event.key.toUpperCase().match(/(^[A-Z]$)/)) {
      onSelectKey(event.key.toUpperCase());
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyBoard);

    return () => document.removeEventListener("keydown", handleKeyBoard);
  }, [handleKeyBoard]);

  if (keyVal == "") {
    return (
      <div
        id="letter"
        onClick={() => selectKey(keyVal)}
        className={`rounded-sm p-6 cursor-pointer col-span-2 uppercase flex justify-center items-center font-bold border-1 border-gray-100`}
      >
        {keyVal}
      </div>
    );
  } else {
    return (
      <div
        id="letter"
        onClick={() => selectKey(keyVal)}
        className={`rounded-md p-6 ${
          bigkey ? "min-w-12" : ""
        } cursor-pointer uppercase text-white flex justify-center items-center font-bold ${
          disabledLetter.includes(keyVal) ? "bg-gray-900" : "bg-gray-700"
        }`}
      >
        {keyVal}
      </div>
    );
  }
}
