import React from 'react'
import { Button } from './Button'
import {BiPlayCircle} from 'react-icons/bi'
import {FaPlayCircle} from 'react-icons/fa'
import '../App.css'
import './HeroS.css'

function HeroS() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVENTRUE</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
<Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
    GET STARTED
</Button>      
<Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
    WATCH TRAILER <FaPlayCircle/>
</Button>                   
            </div>  

        </div>
    )
}

export default HeroS
