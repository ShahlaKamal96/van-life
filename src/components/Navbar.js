import React from 'react'
import { NavLink, Link } from "react-router-dom"

function Navbar() {
    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
        color: '#161616'
    }
    return (
        <div className="navbar">
            <h1> <Link to="/">#VANLIFE</Link></h1>
            <ul>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host">Host</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to="about">About</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to="vans">Vans</NavLink></li>

            </ul>

        </div>
    )
}

export default Navbar