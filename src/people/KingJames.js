import React, { Component } from "react";
import "./people.css";
import KingJames from "./Images/King.png";

class King extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="image">
          <img src={KingJames} />
        </div>
      </div>
    );
  }
}

export default King;
