import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../server"

function VanDetails() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
            });
    }, [params.id]);


    console.log(van)
    return (

        <div >
            {van ? (<div className='vanDetails'> <img src={van.imageUrl} />
                <span className={`van-type ${van.type}`}>{van.type}</span>
                <p className='detail-name'>{van.name}</p>
                <p className="van-price">${van.price}<span>/day</span></p>
                <p className='description'>{van.description}</p>
                <Link className='rent-btn'>Rent this van</Link></div>) : <h2>Loading...</h2>}


        </div>

    )
}

export default VanDetails
