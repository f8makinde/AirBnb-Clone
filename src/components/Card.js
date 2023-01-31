import React from 'react'
import starLogo from '../images/Star 1.png'
export default function Card(props){
    return (
        <div>
          <img src={`../images/${props.item.coverImg}`}  className="card--image" alt='img' />
            <div>
                <img src={starLogo} alt='' />
                <span>{props.item.stats.rating}</span>
                <span>{props.item.stats.reviewCount}</span>
                <span>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>
                <span>From ${props.item.price} </span>
                / person
            </p>
        </div>
    )
}