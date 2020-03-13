import React from "react";
import Game from "./Game";
import "./layout.css";
export default function Layout() {
  return (
    <div>
      <div class="container">
        <div class="item1">Header</div>
        <div class="item2">
          <ScoreList />
        </div>
        <div class="item3">
          <Game />
        </div>
        <div class="item4">Footer</div>
      </div>
    </div>
  );
}
