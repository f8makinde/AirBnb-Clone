import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Card from '../components/Card'
import data  from '../components/data'
export default function App(){
    const card = data.map((cards) => {
        return (
            <Card 
            key={cards.id}
            cards={cards}
            />
           
        )
    })
    return(
        <div>
            <Nav />
            <Main/>
            <section className="cards-list">
                {card}
            </section>
        </div>
    )
}