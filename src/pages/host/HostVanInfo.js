import React from 'react'
import { useOutletContext } from "react-router-dom"
function HostVanInfo() {
    const [currentVan, setCurrentVan] = useOutletContext()

    return (
        currentVan &&
        <div className='hostVanInfo'>
            <h4>Name:<span> {currentVan.name}</span></h4>
            <h4>Category: <span> {currentVan.type}</span></h4>
            <h4>Description: <span>{currentVan.description}</span></h4>
            <h4>Visibility:  <span>public</span></h4>
        </div>


    )
}

export default HostVanInfo