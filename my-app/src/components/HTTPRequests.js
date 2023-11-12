import React, { Component} from 'react'
import axios from 'axios'


export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }

    

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Post:</h2>
                {
                   posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2> {post.id}. {post.title}</h2>
                            <h4>By user ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <br />
                        </div>
                    ))
                   ) : (<h4>Loading Posts ...</h4>) 
                }
            </div>
            )
    }
}

export default HTTPRequests