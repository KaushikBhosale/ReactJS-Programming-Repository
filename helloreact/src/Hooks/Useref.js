import { React, useState, useEffect, useRef } from 'react'

const Useref = () => {
    const [score, setScore] = useState(0);

    const updateScore = () => {
        setScore(score + 1);
    }
    
    let a = useRef(0);
    a.current = a.current + 1;
    // useEffect(() => {
        console.log(`The score update ${a.current} times`);
    // });
    
    const ref = useRef();
    useEffect(() => {
        console.log(`FirstRendering.....`);
        ref.current.style.backgroundColor="red";
    },[]);

    return (
        <>
            <div>
                <h2>useRef Hook</h2>
                <h3>Score : {score}</h3>
                <button ref={ref} className='btn btn-primary' onClick={updateScore}>Update Score</button>
            </div>
        </>
    )
}

export default Useref

