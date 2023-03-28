import React from 'react'
import { Link } from 'react-router-dom'
import Boy from '../../assets/images/boy.png'
function About() {
    return (
        <div className='about'>
            <div>  <img className='boy' src={Boy} /></div>
            <div className='about-content'>
                <p className='about-header'>Don’t squeeze in a sedan when you could relax in a van.</p>
                <p className='about-text'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    <br /><br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className='destination'>
                    <p>Your destination is waiting.Your van is ready.</p>
                    <Link className='destination-button' to="/vans">Explore our vans</Link>

                </div>
            </div>

        </div>
    )
}

export default About