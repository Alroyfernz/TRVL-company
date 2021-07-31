import React from 'react'
import CardI from './CardI'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Checkout This Epic distinition!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardI 
                            src="images/img-9.jpg"
                            text="Explore the waterfall"
                            label="Adventrue"
                            path='/services'
                        />
                         <CardI 
                            src="images/img-2.jpg"
                            text="Explore the island"
                            label="Adventrue"
                            path='/services'
                        />
                         <CardI 
                            src="images/img-3.jpg"
                            text="Explore the beach"
                            label="Adventrue"
                            path='/services'
                        />
                       
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
