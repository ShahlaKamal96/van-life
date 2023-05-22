import React, { useState, useEffect } from 'react'

function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    console.log(vans)
    const myListVans = vans.map((van) => {
        return (

            <div className='edit-vans'>
                <div key={van.id} className="hostvandiv">
                    <img src={van.imageUrl} />
                    <p>{van.name} <span>${van.price}/day</span></p>
                </div>

            </div>

        )
    })

    return (
        <div className='hostvan'>
            <h1>Your listed vans</h1>
            <section>
                {vans ? myListVans : <h2>...Loading</h2>}
            </section>

        </div>
    )
}

export default HostVans