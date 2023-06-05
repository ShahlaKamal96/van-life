import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const myListVans = vans.map((van) => {
        return (
            <Link key={van.id} to={van.id}>
                <div className='edit-vans'>

                    <div className="hostvandiv">
                        <img src={van.imageUrl} />
                        <p>{van.name} <span>${van.price}/day</span></p>
                    </div>

                </div>
            </Link>
        )
    })

    return (
        <div className='hostvan'>
            <h1>Your listed vans</h1>
            {vans.length > 0 ?
                < section >
                    {myListVans}
                </section> : <h2>...Loading</h2>
            }
        </div >
    )
}

export default HostVans