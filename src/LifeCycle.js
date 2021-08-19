import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Toto",
      step: 1,
    };
    console.log(`Step${this.state.step} :I'm in the constructor() `);
  }

  componentDidMount() {
    console.log(`Step${this.state.step} :I'm in the componentDidMount() `);
  }

  render() {
    console.log(`Step${this.state.step} :I'm in the render() `);
    return (
      <div>
        {console.log(`Step${this.state.step} :Update of the dom  `)}
        <p>loading:{this.state.step}</p>
        <p>Name: {this.state.name}</p>
        <ChildComponent />
      </div>
    );
  }
}

export default LifeCycle;
