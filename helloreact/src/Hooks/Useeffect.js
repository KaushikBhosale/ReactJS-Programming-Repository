import {React, useState, useEffect } from 'react'

const Useeffect = () => {
    const [color, setColor]=useState(0);

    const colorValue=()=>{
        setColor(color+1)
    }

    // Case 1 : renders Each Time The Page Loaded 
    // useEffect(() => {
    //     alert("Page Loaded Successfully");
    // });

    // Case 2 : renders Only When First Render Page 
    useEffect(() => {
        alert("Page First Appearance Successfully");
    }, []);

    // Case 3 : renders When Certain State value is is Updated 
    useEffect(() => {
        alert("Color Value Updated");
    }, [color]);

  return (
    <>
      <div>
        <h2>useEffect Hook</h2>
        <h3>color value : {color}</h3>
        <button className='btn btn-primary' onClick={colorValue}>Update</button>
      </div>
    </>
  )
}

export default Useeffect
