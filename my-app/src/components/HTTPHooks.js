import React, {useState, useEffect} from 'react'
import axios  from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
        axios.post(
            "https://jsonplaceholder.typicode.com/posts", 
            {
                title: "Hello World!",
                body: "It works", 
                userId: 123
            }
        ).then(response => {
            setPostMessage(response.status === 201 
                ? `'${response.data.title}' successfully posted!`
                : `Failed`
                )
        })
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                const data = Array.isArray(response.data)
                ? response.data : [response.data]
                setPosts(data);
                })
            .catch(error => {
                setError(error.message);
            })
    }, [])

    return (
        <div>
            <button onClick={postToApi}>
                click me
            </button>
            <p>{postMessage}</p>
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
               ) : (error ? (<p>{error}</p>) : <h4>Loading Posts ...</h4>) 
            }
        </div>
    )
}

export default HTTPHooks