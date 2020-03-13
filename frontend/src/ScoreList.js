import React, { Component } from "react";

export default class ScoreList extends Component {
  state = {
    players: []
  };
  componentDidMount() {
    this.fetchScores();
  }
  async fetchScores() {
    fetch("/score")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .then(players => this.setState({ players }))
      .catch(err => console.log(err));
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.players.map(item => {
            <li>{item.playerName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
