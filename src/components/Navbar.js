import React from 'react'
import { Link, Outlet } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1> <Link to="/">#VANLIFE</Link></h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/vans">Vans</Link></li>
                </ul>

            </div>
            <Outlet />
        </>
    )
}

export default Navbar