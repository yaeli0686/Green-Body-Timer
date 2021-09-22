import React, { Component } from 'react';
import MainTimer from "./components/mainTimer";
import Counter from "./components/counter";


class App extends React.Component {
  state = {
    workingTime: 30,
    restingTime: 60,
    exerciseCounter: 1,
    setsCounter: 1,
    maxExercise: 12,
    maxSets: 3
  }

  componentDidMount() {
    setInterval(() => {
      this.tik();
    }, 1000);
  }

  tik = () => {
    this.workingTime
  }

  render() {
    return <div className="App">
      <h1>Green Body</h1>
      <hr />
      <div className="wrapper">
        <div className="right">
          <MainTimer time={this.state.time}></MainTimer>
        </div>
        <div className="left">
          <Counter counter={this.state.exerciseCounter} max={this.state.maxExercise} text={"תרגיל"}></Counter>
          <Counter counter={this.state.exerciseCounter} max={this.state.maxExercise} text={"סט"}></Counter>
        </div>
      </div>
    </div>;
  }
}

export default App;


