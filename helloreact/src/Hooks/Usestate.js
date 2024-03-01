import React from 'react'
import { useState } from 'react';


const Usestate = () => {
    const [count, setCount] = useState(0);

    function Increament() {
        setCount(count + 1);
    }
    function Decreament() {
        setCount(count - 1);
    }

    return (
        <>
            <div >
                <h2>useState Hook</h2>
                <h2>The Count is : {count}</h2>
                <button onClick={Increament} className='btn btn-success'>Increment</button>
                <button onClick={Decreament} className='btn btn-danger'>Decrement</button>
            </div>
        </>
    )
}

export default Usestate;
