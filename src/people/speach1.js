import React, { Component } from "react";
import "./people.css";
import Nonquests from "../Quests/NonQuests";
import { connect } from "react-redux";
class Speach1 extends Component {
  state = { answer: 0, value: "Select", vb: 0 };

  answerChecker = event => {
    this.setState({ value: event.target.value });

    if (this.state.value === "wrong") {
      {
      }
    }
    if (this.state.value === "correct") {
    }

    event.preventDefault();
  };
  render() {
    let quests = "How can i help you...My King...";

    if (this.props.count === 1) {
      quests = "";
    }
    if (this.props.count === 2) {
      quests = "Ofcourse My King! On my way...";
    }
    if (this.props.count === 3) {
      quests = "";
    }
    if (this.props.count === 4) {
      quests = "";
    }
    if (this.props.count === 5) {
      quests = "None of your bussiness!";
    }
    if (this.props.count === 6) {
      quests = "";
    }
    if (this.props.count >= 7) {
      quests = "";
    }
    if (this.props.count >= 7) {
      quests = " ";
      if (this.props.randQ === 1) {
      }
      if (this.props.randQ === 2) {
        quests = (
          <form className="selections" onSubmit={this.answerChecker}>
            <label>
              Pick your Answer:
              <select value={this.state.value} onChange={this.answerChecker}>
                <option value="wrong">Greece</option>
                <option value="correct">Egypt</option>
                <option value="wrong">Italy</option>
                <option value="wrong">USA</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
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
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Speach1);
