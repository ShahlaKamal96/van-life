import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function HostLayout() {
    const activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
        color: " #161616"
    }
    return (
        <div className='hostLayout'>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to=".">Dashboard</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="income">Income</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="vans">Vans</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="reviews">Reviews</NavLink >
            <Outlet />

        </div>
    )
}

export default HostLayout