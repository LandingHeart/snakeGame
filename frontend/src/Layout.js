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
          <Game />
        </div>
      </div>
    </div>
  );
};
export default Layout;
