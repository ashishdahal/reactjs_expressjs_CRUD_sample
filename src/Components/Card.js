import React, { useState } from 'react'
import "./Card.css"

function Card({yname,age,title,date,task}) {
    return (
    
    <div className='Card'>
      <div className = 'upper-container'>
        <div className = 'image-container'>
          <img src = "data:image/jpeg;base64,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" alt= "image" height="100px" width="100px"/>
        </div>
      </div>
      <div className="lower-container">

        <h1 id='name'>{yname}</h1>
        <h2 id="age">{age}</h2>
        <h3 id='title'>{title}</h3>
        <h4 id ='date'>{date}</h4>
        <p id='task'>{task}</p>

      </div>

    </div>  
  )
}

export default Card;