import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Toto",
      step: 1,
    };
    console.log(`Step${this.state.step} :I'm in the constructor() `);
  }

  render() {
    return (
      <div>
        <p>loading:{this.state.step}</p>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

export default LifeCycle;
