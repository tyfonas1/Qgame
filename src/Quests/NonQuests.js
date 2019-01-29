import React, { Component } from "react";
import speach1 from "../people/speach1";

class NonQuests extends Component {
  state = {
    textbox: "asas "
  };

  storyBook = () => {
    if (document.getElementsByClassName === 0) {
      this.setState({ textbox: "ahahahaha" });
    }
    console.log(this.state.textbox);
  };

  render() {
    return (
      <div>
        <h1>{this.state.textbox}</h1>
      </div>
    );
  }
}

export default NonQuests;
