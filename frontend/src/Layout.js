import React from "react";
import Game from "./Game";
import ScoreList from './ScoreList'
import "./layout.css";
export default function Layout() {
  return (
    <div>
      <div class="container">
        <div class="sidebar">
          <ScoreList />
        </div>
        <div class="game-content">
          <Game />
        </div>
      </div>
    </div>
  );
}
