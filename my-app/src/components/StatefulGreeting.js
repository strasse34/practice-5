import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState)
            console.log("Previous prop:", prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "GoodBye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return {
                count: prevState.count +1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You have clicked {this.state.count} times.</p>
            </div> 
        );
    }
}

export default StatefulGreeting;