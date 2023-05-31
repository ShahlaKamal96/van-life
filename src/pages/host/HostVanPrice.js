import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPrice() {
    const [currentVan, setCurrentVan] = useOutletContext()
    console.log(currentVan)
    return (
        <h3 className='hostVanPrice'>${currentVan.price}<span>/day</span></h3>
    )
}

export default HostVanPrice