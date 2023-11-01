import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCycle/LifeCyclesCDMChild'


export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)
    
        this.state = {
             data: 'loading'
        }
    }
    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data: 'loaded'
            })
        }, 5000)
    }
    componentDidMount() {
        console.log('Component mounted')
        this.getData()
    }
    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM