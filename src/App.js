import React, { Component } from "react";
import "./App.css";
import Melina from "./people/Melina";
import KingJames from "./people/KingJames";
import Speach1 from "./people/speach1";
import Speach2 from "./people/speach2";
import Nonquests from "./Quests/NonQuests";
import Goblin from "./people/Goblin";
import { connect } from "react-redux";

class App extends Component {
  state = {
    counter: 0,
    qCounter: 0,
    random: 0
  };
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  correctAnswer = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };

  counter = () => {
    this.setState({ counter: this.state.counter + 1 });
    const min = 1;
    const max = 10;
    const rand = min + Math.random() * (max - min);
    this.setState({ random: rand });
  };

  render() {
    let char1 = <Melina />;
    let char2 = <KingJames />;
    if (this.props.count >= 4) {
      char2 = <Goblin />;
    }
    return (
      <div className="bgimg">
        <div className="wrapper">
          <div className="speach1">
            <Speach1
              onChange={this.correctAnswer}
              randQ={parseInt(this.state.random)}
              qCounter={this.state.counter}
            />
          </div>

          <div className="people1">{char1}</div>
          <div className="continue">
            <button className="button" onClick={this.increment}>
              press to continue
            </button>
          </div>
          <div className="speach2">
            <Speach2
              qCounter={this.state.counter}
              randQ={parseInt(this.state.random)}
            />
          </div>
          <div className="people2">{char2}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(App);
