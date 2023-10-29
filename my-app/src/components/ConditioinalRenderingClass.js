import React, { Component } from 'react'

export class ConditioinalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedin: false,
      }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? "Loaded" : "Loading ..."}</h1>
                {this.state.isLoggedin ? (
                    <p>Welcome back!</p>
                ) : (
                    <div>
                        <p>Please Log in!</p>
                        <ul>
                            <li>User name</li>
                            <li>Password</li>
                            <button>Log in</button>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default ConditioinalRenderingClass