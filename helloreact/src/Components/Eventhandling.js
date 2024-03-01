import { React, useState } from 'react'
import './Eventhandling.css'
const Eventhandling = () => {

    // const [name, setName] = useState("Kaushik");
    const [form, setForm] = useState({ email: "", phno: "" });

    const handleClick = () => {
        alert("Hey i am Click");
    }

    const handleChange = (e) => {
        // setName(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    return (
        <>
            <div className="block">
                <div className='button' >
                    <h2>React Events</h2>
                    <button onClick={handleClick} className='btn btn-warning'>Click Me</button>
                    <hr />
                    <div>
                        Enter Email :
                        <input type="text" name='email' value={form.email} onChange={handleChange} />
                    </div>
                    <div>
                        Enter Phno : <input type="text" name='phno' value={form.phno} onChange={handleChange} />
                    </div>
                    {/* <input type="text" value={name} onChange={handleChange}/> */}
                </div>
            </div>
        </>
    )
}

export default Eventhandling
