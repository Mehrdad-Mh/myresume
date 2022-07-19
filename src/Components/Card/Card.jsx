import React from 'react';
import './Card.css'
const Card = ({emoji,heading,detail}) => {
    return (
<div className="Card" >
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">بیشتر آشنا بشید!</button>
</div>
    )
}

export default Card