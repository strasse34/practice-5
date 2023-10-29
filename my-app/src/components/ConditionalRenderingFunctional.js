import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.isLoggedin ? "Hi User!" : "Log in User!"}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional;