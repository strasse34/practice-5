import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post : null
      }
    }

    postToApi = () => {
        axios.post(
            "https://jsonplaceholder.typicode.com/posts", 
            {
                title: "Hello World!",
                body: "It works", 
                userId: 123
            }
        ).then(response => {
            this.setState({
                post : response.data
            })
        })
        

        
        
    }

    

  render() {
    const post = this.state.post
    return (
      <div>
        <button onClick={this.postToApi}>
            click me
        </button>
        {
            post ? (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>{post.id}</p>
                    <p>{post.userId}</p>
                </div>
            ) : (<p>Please head button!</p>)
        }
      </div>
    )
  }
}

export default HTTPPosts