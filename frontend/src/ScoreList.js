import React, { Component } from "react";

export default class ScoreList extends Component {
  state = {
    players: []
  };
  componentDidMount() {
    this.fetchScores();
  }
  async fetchScores() {
    fetch("/players")
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
  renderPlayerInfo = () => {
    const data = this.state.players;

    const playerInfo = data.map((item, index) => (
      <div key={item.id}>
        <li>asldkfjasdkl {item.playerName}</li>
      </div>
    ));
    return playerInfo;
  };
  render() {
    return (
      <div>
        <ul>{this.renderPlayerInfo}</ul>
      </div>
    );
  }
}
