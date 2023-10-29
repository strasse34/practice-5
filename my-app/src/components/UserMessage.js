import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedin ? (
                    <div>
                      <p>Welcome back!</p>
                      <button onClick={props.handler}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please Log in!</p>
                        <ul>
                            <li>User name</li>
                            <li>Password</li>
                            <button onClick={props.handler}>Log In</button>
                        </ul>
                    </div>
                )}
    </div>
  )
}

export default UserMessage