import React from 'react'
import'./Cards.css'

const Cards = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Cards;
