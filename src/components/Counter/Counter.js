import { Component } from "react";

class Counter extends Component {

    state = { counter: 0}
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement = () => {
        this.setState({ counter: this.state.counter -1})
    }

    reset=()=>{
        this.setState({counter:0})
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default Counter;