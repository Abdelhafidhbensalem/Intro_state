import { Component } from "react";

class Task extends Component {

    state = {text:"",tasks:[]}
    render() {
        return (<div>
            <input placeholder='add new task' onChange={(e)=>this.setState({text:e.target.value})} />
            <button onClick={()=>this.setState({tasks:[...this.state.tasks,this.state.text]})}>Add</button>
            <ul>{this.state.tasks.map(el=><li>{el}</li>)}</ul>
        </div>);
    }
}

export default Task;