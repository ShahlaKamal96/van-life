import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

function Vans() {

    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans
    console.log(displayedVans)

    const allVans = displayedVans.map((van) => {
        return (
            <Link to={van.id} key={van.id} >
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
    // function genNewSearchParamString(key, value) {
    //     const data = new URLSearchParams(searchParams //awa qimaty old query paramtersa)
    //     if (value === null) {
    //         data.delete(key)
    //     }
    //     else {
    //         data.set(key, value)
    //     }
    //     return `?${data.toString()}`
    // }
    function handleSearchParams(key, value) {
        return setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className='vans'>
            <h1>Explore our van options</h1>
            <div className='vans-types'>
                <button className={`simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleSearchParams("type", "simple")}>Simple</button>
                <button className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleSearchParams("type", "luxury")} >Luxury</button>
                <button className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleSearchParams("type", "rugged")}>Rugged</button>
                <button className="clear-filters" onClick={() => handleSearchParams("type", null)}>Clear filters</button>
                {/* <Link className={`simple ${typeFilter === "simple" ? "selected" : ""}`} to={genNewSearchParamString("type", "simple")}>Simple</Link>
                <Link className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`} to={genNewSearchParamString("type", "luxury")}>Luxury</Link>
                <Link className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`} to={genNewSearchParamString("type", "rugged")}>Rugged</Link>
                <Link className="clear-filters" to={genNewSearchParamString("type", null)}>Clear filters</Link> */}
            </div >
            <div className='all-vans'>
                {allVans}
            </div>
        </div >
    )
}

export default Vans
