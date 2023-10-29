import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedin ? (
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

export default UserMessage