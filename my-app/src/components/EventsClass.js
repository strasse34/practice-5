import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("clicked class")
    }
  render() {
    return (
      <div>
        <button onMouseOver={this.clickHandler}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass
