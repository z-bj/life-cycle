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

  componentDidMount() {
    console.log(`Step${this.state.step} :I'm in the componentDidMount() `);
    this.setState({
      name: this.props.name,
      step: this.state.step + 1,
    });

    console.log(
      `Step${this.state.step} :setState has change in componentDidMount() `
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Step${this.state.step} :I'm in the component didUpdate () `);
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    console.log(`Step${this.state.step} :I'm in the render() `);
    return (
      <div>
        {console.log(`Step${this.state.step} :Update of the dom  `)}
        <p>loading:{this.state.step}</p>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

export default LifeCycle;
