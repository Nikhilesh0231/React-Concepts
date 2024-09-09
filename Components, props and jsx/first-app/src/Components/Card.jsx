import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=900&t=st=1711455732~exp=1711456332~hmac=5b1c3700560349de6ee7e769dbba6da6de9dd5328133f23babad3235a5c27fe6" alt=""  width="235"/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
