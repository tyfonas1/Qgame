import React, { Component } from "react";
import "./people.css";

class Speach2 extends Component {
  state = {};

  render() {
    let quests = "";

    if (this.props.qCounter === 1) {
      quests = "I need you to clear the woods";
    }
    if (this.props.qCounter === 2) {
      quests = "";
    }
    if (this.props.qCounter === 3) {
      quests = "Be carefull...";
    }
    if (this.props.qCounter === 4) {
      quests = "...Who's there?!";
    }
    if (this.props.qCounter === 5) {
      quests = "";
    }
    if (this.props.qCounter === 6) {
      quests = "Hmmm...Ok then...Answer me this!";
    }
    if (this.props.qCounter >= 7) {
      quests = " ";
      if (this.props.randQ === 1) {
      }
      if (this.props.randQ === 2) {
        quests = "What country is home to the Bank of Alexandria?";
      }
      if (this.props.randQ === 3) {
        quests = "Who is dasxca?";
      }
      if (this.props.randQ === 4) {
        quests = "Who is asasa?";
      }
      if (this.props.randQ === 5) {
        quests = "Who is asasa?";
      }
    }

    return (
      <div className="speak">
        <h1>{quests}</h1>
      </div>
    );
  }
}

export default Speach2;
