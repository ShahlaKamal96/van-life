import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPhotos() {
    const [currentVan, setCurrentVan] = useOutletContext()
    return (
        <div>
            <img className='hostVanPhoto' src={currentVan.imageUrl} />
        </div>
    )
}

export default HostVanPhotos