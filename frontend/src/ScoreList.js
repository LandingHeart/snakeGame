import React, { Component } from "react";

export default class ScoreList extends Component {
  state = {
    players: [],
    score: 0,
    allScore: [],
    finalResult: [],
    type: "desc",
    limit: 10,
  };
  componentDidMount() {
    this.fetchScores();
    setInterval(() => {
      this.fetchScores();
    }, 1000);
  }

  async fetchScores() {
    fetch("/score")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .then((allScore) => {
        this.sortDescending(allScore);
      });
  }
  sortDescending = (allScore) => {
    allScore.sort((a, b) => a.score - b.score).reverse();
    this.setState({ allScore });
  };
  render() {
    return (
      <div className="container" style={{ padding: "20px" }}>
      Score List 
        {this.state.allScore.slice(0, this.state.limit).map((item, index) => (
          <div key={item.id}>
            <p>Score: {item.score}</p>
          </div>
        ))}
      </div>
    );
  }
}
