import React from "react";
import ReactDOM from "react-dom/client";
import BoardProvider from "./Components/BoardProvider.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BoardProvider>
    <App />
  </BoardProvider>
);
