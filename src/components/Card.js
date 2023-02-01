import React from 'react'

import starLogo from '../images/Star 1.png'
export default function Card(props){
    let badgeText
     if(props.cards.openSpots === 0){
        badgeText= "SOLD OUT"
     }
     else if(props.cards.location === "Online"){
       badgeText = "ONLINE"
     }
    return (
            
            <div className='card-section'>
                    {badgeText && <div className='card-badge'>{badgeText}</div>}
          <img  src={props.cards.coverImg}  className="card--image" alt='img' />
            <div className="card--stats">
                <img src={starLogo} className='card--star' alt='' />
                <span>{props.cards.stats.rating}</span>
                <span>({props.cards.stats.reviewCount}) .</span>
                <span>{props.cards.location}</span>
            </div>
            <p className='card--title'>{props.cards.title}</p>
            <p className='card-text'>
                <span className='card--text--bold'>From ${props.cards.price} </span>
                / person
            </p>
            </div>
     
    )
}