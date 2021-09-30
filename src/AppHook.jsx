import React, { useEffect, useState } from 'react';
import MainTimer from "./components/mainTimer";
import Counter from "./components/counter";
import SwitchAlert from './components/switchAlert';

const App = () => {

  const defaults = {
    workingTime: 10,
    restingTime: 20,
    exerciseCounter: 1,
    setsCounter: 1,
    maxExercise: 12,
    maxSets: 3
  }


  //These are the states:

  // const myState = useState(defaults.workingTime);
  // const workingTime = myState[0];
  // const setWorkingTime = myState[1];

  const [workingTime, setWorkingTime] = useState(defaults.workingTime);
  const [restingTime, setRestingTime] = useState(defaults.restingTime);
  const [exerciseCounter, setExerciseCounter] = useState(defaults.exerciseCounter);
  const [setsCounter, setSetsCounter] = useState(defaults.setsCounter);

  //side effects of the component:

  useEffect(() => {
    // componentDidMount:
    const interval = setInterval(() => {
      tik();
    }, 300);
    // componentWillUnmount (returns clean-up function):
    return () => clearInterval(interval);
  });


  let tik = () => {

    if (workingTime >= 0) {
      setWorkingTime(workingTime - 1)
    } else if (restingTime > 0) {
      setRestingTime(restingTime - 1)
    } else if (setsCounter < defaults.maxSets) {

      setWorkingTime(defaults.workingTime);
      setRestingTime(defaults.restingTime);
      setSetsCounter(setsCounter + 1);

    } else if (exerciseCounter < defaults.maxExercise) {
      setWorkingTime(defaults.workingTime);
      setRestingTime(defaults.restingTime);
      setSetsCounter(defaults.setsCounter);
      setExerciseCounter(exerciseCounter + 1);
    } else {
      setWorkingTime(defaults.workingTime);
      setRestingTime(defaults.restingTime);
      setSetsCounter(defaults.setsCounter);
      setExerciseCounter(defaults.exerciseCounter);
    }
  }

  let getTimerTime = () => {
    return workingTime >= 0 ? workingTime : restingTime;
  }
  return (
    <div className="App">
      <h1>Green Body</h1>

      <div className="right">
        <MainTimer time={getTimerTime()}></MainTimer>
      </div>
      <div className="left">
        <Counter counter={exerciseCounter} max={defaults.maxExercise} text={"תרגיל"}></Counter>
        <Counter counter={setsCounter} max={defaults.maxSets} text={"סט"}></Counter>
      </div>
      <SwitchAlert />
      {/* {workingTime < 0 && setsCounter === defaults.maxSets && <SwitchAlert />} */}

    </div>
  );
}

export default App;


