import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }

  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log("conponentWillReceiveProps...");
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
