import React from "react";
import Game from "./Game";
import ScoreList from "./ScoreList";
import "./layout.css";
const Layout = (props) => {
  return (
    <div>
      <div className="containerGrid">
        <div className="sidebar">
          <ScoreList />
        </div>
        <div className="game-content">
          <div
            className="container"
            style={{ backgroundColor: "lightBlue", padding: "10px" }}
          >
            <p>
              This game is a snake game, and like eating apple appearing in the
              board
            </p>
            <p>Use the arrow key to move around the board</p>
          </div>
          <Game />
        </div>
      </div>
    </div>
  );
};
export default Layout;
