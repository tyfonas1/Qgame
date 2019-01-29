import React, { Component } from "react";
import "./people.css";
import MelinaHero from "./Images/MelinaHero.png";

class MelinaHe extends Component {
  state = {
    Int: 3,
    pwr: 2,
    hp: 3,
    fear: 6
  };

  render() {
    return (
      <div>
        <div className="image">
          <img src={MelinaHero} />
        </div>
      </div>
    );
  }
}

export default MelinaHe;
