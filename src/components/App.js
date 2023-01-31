import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Card from '../components/Card'
import data  from '../components/data'
export default function App(){
    const card = data.map((item) => {
        return (

            <Card 
            key={item.id}
            item={item}
            />
           
        )
    })
    return(
        <div>
            <Nav />
            <Main/>
            {card}
        </div>
    )
}