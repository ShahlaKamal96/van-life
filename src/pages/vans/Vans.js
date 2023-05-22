import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
    }, [])


    const allVans = vans.map((van) => {
        return (
            <Link to={`/vans/${van.id}`} key={van.id} >
                <div className="van">
                    <img src={van.imageUrl} />
                    <div className="name-price">
                        <p className="van-name">{van.name}</p>
                        <p className="van-price">${van.price} <span>/day</span></p>
                    </div>
                    <span className={`van-type ${van.type}`}>{van.type}</span>
                </div>
            </Link>
        )
    })

    return (
        <div className='vans'>
            <h1>Explore our van options</h1>
            <div className='vans-types'>
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button>Clear filters</button>
            </div>
            <div className='all-vans'>
                {allVans}
            </div>
        </div>
    )
}

export default Vans
