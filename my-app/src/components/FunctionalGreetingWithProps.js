import React from "react";



const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Welcome to React! {props.wish}. I think you are {props.age} years old.</h1>;
}

export default FunctionalGreetingWithProps