import React from 'react';
import MainTimer from "./components/mainTimer";
import Counter from "./components/counter";
import SwitchAlert from './components/switchAlert';


class App extends React.Component {
  defaults = {
    workingTime: 10,
    restingTime: 20,
    exerciseCounter: 1,
    setsCounter: 1,
    maxExercise: 12,
    maxSets: 3
  }

  state = {
    ...this.defaults
  }

  componentDidMount() {
    setInterval(() => {
      this.tik();
    }, 300);
  }

  tik = () => {
    const { workingTime, restingTime, setsCounter, maxSets, maxExercise, exerciseCounter } = this.state;

    if (workingTime >= 0) {
      this.setState({
        workingTime: workingTime - 1
      })
    } else if (restingTime > 0) {
      this.setState({
        restingTime: restingTime - 1
      })
    } else if (setsCounter < maxSets) {
      this.setState({
        workingTime: this.defaults.workingTime,
        restingTime: this.defaults.restingTime,
        setsCounter: setsCounter + 1
      })
    } else if (exerciseCounter < maxExercise) {
      this.setState({
        workingTime: this.defaults.workingTime,
        restingTime: this.defaults.restingTime,
        setsCounter: this.defaults.setsCounter,
        exerciseCounter: exerciseCounter + 1
      })
    } else {
      this.setState({ ...this.defaults })
    }
  }

  getTimerTime = () => {
    return this.state.workingTime >= 0 ? this.state.workingTime : this.state.restingTime;
  }

  render() {
    return <div className="App">
      <h1>Green Body</h1>
      <hr />
      <div className="wrapper">
        <div className="right">
          <MainTimer time={this.getTimerTime()}></MainTimer>
        </div>
        <div className="left">
          <Counter counter={this.state.exerciseCounter} max={this.state.maxExercise} text={"תרגיל"}></Counter>
          <Counter counter={this.state.setsCounter} max={this.state.maxSets} text={"סט"}></Counter>
        </div>
      </div>

      {this.state.workingTime < 0 && this.state.setsCounter === this.state.maxSets && <SwitchAlert />}

    </div>
  }
}

export default App;


