import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = count;
    }, [count]);
  return (
    <div>
        <button onClick={()=> setCount(count => count+1)}>
            Increement({count})
        </button>
    </div>
  )
}

export default UseEffect