import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <h1> <Link to="/">#VANLIFE</Link></h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li>Vans</li>
            </ul>
        </div>
    )
}

export default Navbar