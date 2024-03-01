import { React, useEffect, useState } from 'react'
import './Apicard.css';
const Apicard = () => {

    const [apicard, setApicard] = useState([]);
    const fetchdata = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await a.json();
        setApicard(data);
        console.log(data);
    }
    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <>
            <div className="container">
                <h1>Cards From API : <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a></h1>
                {apicard.map((apicard) => {
                    return <div className="apicard" key={apicard.id}>
                        <h1>{apicard.title}</h1>
                        <p>{apicard.body}</p>
                        <span>By User Id : {apicard.userId}</span>
                    </div>
                })}

            </div>
        </>
    )
}

export default Apicard;
