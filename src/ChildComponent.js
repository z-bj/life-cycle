import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("I'm in the child's constructor()");
  }

  componentDidMount() {
    console.log("I'm in the child's componentDidMount()");
  }

  render() {
    console.log("I'm in the child's render()");

    return (
      <div>
        {console.log("update DOM in child's component")}
        Hello
      </div>
    );
  }
}

export default ChildComponent;
