import React, { Component, useEffect, useState } from 'react'
import Counter from './components/Counter/Counter';
import Task from './components/Task/Task';

const App = () => {

const [display, setDisplay] = useState(false)
const toggle=()=>{
  setDisplay(!display)
}

useEffect(() => {
   console.log("App Mounted or u^pdated");

  /*return () => {
    second
  }*/// component will unmount
}, [display])


  return (
    <div>
      <button onClick={toggle}>{display?"Hide":"Show"}</button>
      {display?<Counter />:null}
      <Task />
    </div>
  )
}

export default App




// class component
/*
class App extends Component {
  state = {display:false}
  componentDidMount() {
    console.log("App Mounted");
  }
  render() {
    return (<div>

      <button onClick={()=>this.setState({display:!this.state.display})}>{this.state.display?"Hide":"Show"}</button>
      {this.state.display?<Counter />:null}
      <Task />
    </div>);
  }
}

export default App;
*/
//Functional Component


