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
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to="/host">Dashboard</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host/income">Income</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host/vans">Vans</NavLink >
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink >
            <Outlet />

        </div>
    )
}

export default HostLayout