import React, { Component } from "react";
import Snake from "./Snake";
import "./App.css";
import Fruit from "./Fruit";
const getRandomPos = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};
var myint;
const initialState = {
  food: getRandomPos(),
  speed: 60,
  snakeDots: [
    [0, 0],
    [2, 0]
  ],
  direction: "R",
  score: 0
};
export default class Game extends Component {
  state = initialState;
  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate() {
    this.checkBorders();
    this.checkCollision();
    this.checkEat();
  }
  startGame = e => {
    myint = setInterval(this.moveSnake, this.state.speed);
  };
  onKeyDown = e => {
    e = e || window.event;

    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "U" });
        break;
      case 40:
        this.setState({ direction: "D" });
        break;
      case 37:
        this.setState({ direction: "L" });
        break;
      case 39:
        this.setState({ direction: "R" });
        break;
      default:
        break;
    }
  };
  checkBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      this.gameOver();
    }
  }
  checkCollision() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.gameOver();
      }
    });
  }
  checkEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomPos()
      });
      this.eatFruit();
      this.increaseSpeed();
      console.log(this.state.speed);
    }
  }
  eatFruit() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.increaseSpeed();
    this.setState({
      snakeDots: newSnake,
      score: this.state.score + 10
    });
  }
  gameOver() {
    this.setState({
      food: getRandomPos(),
      speed: 200,
      snakeDots: [
        [0, 0],
        [2, 0]
      ],
      direction: "R",
      score: 0
    });
    clearInterval(myint);
    alert("Your score is " + this.state.score);
  }
  increaseSpeed() {
    this.setState({
      speed: this.state.speed - 10
    });
  }
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    switch (this.state.direction) {
      case "R":
        head = [head[0] + 2, head[1]];
        break;
      case "L":
        head = [head[0] - 2, head[1]];
        break;
      case "D":
        head = [head[0], head[1] + 2];
        break;
      case "U":
        head = [head[0], head[1] - 2];
        break;
      default:
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Score: {this.state.score}</h1>
        <button onClick={this.startGame}> startGame </button>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Fruit dot={this.state.food} />
        </div>
      </div>
    );
  }
}
