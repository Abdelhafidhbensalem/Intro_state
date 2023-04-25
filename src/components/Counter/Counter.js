import { Component, useEffect, useState } from "react";
/*
class Counter extends Component {

    state = { counter: 0,timer:0 }
    componentDidMount() {
        console.log("Counter Mounted");
        setInterval(() => {this.setState({timer:this.state.timer+1})}, 2000);
    }
    componentWillUnmount() {
        console.log("Counter Unmounted");
    }

    componentDidUpdate() {
        console.log("Counter Updated");
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    reset = () => {
        this.setState({ counter: 0 })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
                <h4>Counter Timer:{this.state.timer}</h4>
            </div>
        );
    }
}

export default Counter;
*/


const Counter = () => {
const [counter,setCounter]=useState(0)
const [timer,setTimer]=useState(0)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }

    const reset=()=>{
        setCounter(0)
    }

    useEffect(() => {
        console.log("Counter Mounted or updated");
     
       return () => {
         console.log("Counter Unmounted");
       }
       // component will unmount
     }, [counter,timer])
     
    return (
        <div>  <button onClick={increment}>+</button>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <h4>Counter Timer:{0}</h4></div>
    )
}

export default Counter