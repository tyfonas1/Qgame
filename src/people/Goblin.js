import React, { Component } from "react";
import "./people.css";
import goblinimg from "./Images/Goblin.png";

class Goblin extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="image">
          <img src={goblinimg} />
        </div>
      </div>
    );
  }
}

export default Goblin;
