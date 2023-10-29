import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedin: false,
      }
    }

    handler = ()=> {
        this.setState({
            isLoggedin: this.state.isLoggedin === true ? false : true
        })
        console.log(this)
    }
    


    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage 
                isLoggedin={this.state.isLoggedin} 
                handler={this.handler}
                
                
                />
            </div>
        )
    }
}

export default NestingComponent