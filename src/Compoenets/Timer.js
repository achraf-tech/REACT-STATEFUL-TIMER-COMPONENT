import React, { Component } from "react";
import Test from "./Test";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      run: false
    };
    setInterval(() => {
      if (this.state.run === true)
        this.setState({
          timer: this.state.timer + 1000
        });
    }, 1000);
  }
  startHandler = () => {
    this.setState({
      run: !this.state.run
    });
  };
  ResetHandler = () => {
    this.setState({
      run: false,
      timer: 0
    });
  };
  render() {
    return (
      <div>
        <Test t={this.state.timer} />
        <div className="button-1">
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.startHandler}
          >
            {this.state.run === false ? "start" : "pause"}
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.ResetHandler}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
