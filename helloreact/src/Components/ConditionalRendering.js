import { React, useState } from 'react'
import './ConditionalRendering.css';

const ConditionalRendering = () => {

    const [showBtn, setShowBtn] = useState(false);

    const changeBtn = () => {
        setShowBtn(!showBtn);
    }

    // const [todos, setTodos] = useState([
    const [todos] = useState([
        {
            title: "Full Stack Developer",
            desc: "Front EndDev & Backend Dev"
        },
        {
            title: "Data Science",
            desc: "Data Analyst, Database Admin"
        },
        {
            title: "Machine Learning",
            desc: "Prediction of Data"
        },

    ])

    return (
        <>
            <div className='CR'>
                <h2>Conditional Rendering</h2>

                {/* {showBtn ?
                    <button className='btn btn-success'>showBtn is True</button> :
                    <button className='btn btn-danger'>showBtn is False</button>} */}

                {showBtn && <button className='btn btn-success'>showBtn is True</button>}
                <button onClick={changeBtn} className='btn btn-primary'>Toggle Button</button>

                {todos.map(todo => {
                    return <div key={todo.title} className="m-4 border">
                        <div className="todo">{todo.title}</div>
                        <div className="todo">{todo.desc}</div>
                    </div>
                })}
            </div>
        </>
    )
}

export default ConditionalRendering
