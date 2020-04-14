import React from "react";
import Layout from "./Layout";
import Routes from "./Routes";
// import Home from "./Home";
import Login from "./Login";
export default function App() {
  return (
    <div>
      <div
        className="container"
        style={{ backgroundColor: "lightBlue", padding: "50px" }}
      >
        <p>
          This game is a snake game which will eat the apple appear in board
        </p>
        <p>Use the arrow key to move around the board</p>
      </div>
      <Routes />
    </div>
  );
}
