import { Component } from "react";


import React from 'react'

const Task = () => {
  return (
    <div>Task</div>
  )
}

export default Task


/*
class Task extends Component {

    state = {text:"",tasks:[]}
    componentDidMount() {
        console.log("Task Mounted");
      }
    render() {
        return (<div>
            <input value={this.state.text} placeholder='add new task' onChange={(e)=>this.setState({text:e.target.value})} />
            <button onClick={()=>{this.setState({tasks:[...this.state.tasks,this.state.text]});this.setState({text:""})}}>Add</button>
            <ul>{this.state.tasks.map(el=><li>{el}</li>)}</ul>
        </div>);
    }
}

export default Task;
*/

