import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import Image1 from "../images/e.jpg"
import Image2 from "../images/cycle.jpg"
import Image3 from "../images/parents.png"

function Cards() {
    return (
        <div className='cards'>
            <h1 className='cardheader'>Check out these Notices!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={Image1}
                            text="First term Notices"
                            label="Exam Notice"
                            path="/services"
                        />
                        <CardItem 
                            src={Image3}
                            text="Parents Meeting Notice"
                            label="Meeting Notice"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={Image2}
                            text="extracurricular activities Notice"
                            label=""
                            path="/services"
                        />
                        <CardItem 
                            src={Image1}
                            text="Final Exam Notices"
                            label="Exam Notices"
                            path="/services"
                        />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards