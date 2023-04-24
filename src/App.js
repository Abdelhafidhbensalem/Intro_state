import React, { Component } from 'react'
import Counter from './components/Counter/Counter';
import Task from './components/Task/Task';


class App extends Component {
  state = {}
  render() {
    return (<div>
      <Counter />
      <Task />
    </div>);
  }
}

export default App;

//Functional Component
/*
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
*/