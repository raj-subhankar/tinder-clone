import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.washingtonian.com/wp-content/uploads/2015/09/stevejobs1.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://i.insider.com/5d84ce522e22af4c215743c6?width=1136&format=jpeg'
        }
    ])
    
    return(
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards