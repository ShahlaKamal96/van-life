import React from "react"
import { useParams, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {


    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    const activeLink = {
        fontWeight: 'bold',
        color: "#161616"
    }
    return (
        <section>
            <div className="hostVanDetail">
                <NavLink to=".." relative="path">&larr; Back to all vans </NavLink>
                {currentVan &&
                    <div className="currentVan">
                        <img src={currentVan.imageUrl} />
                        <div >
                            <span className={`van-type ${currentVan.type}`}>{currentVan.type}</span>
                            <h2 className="van-name">{currentVan.name}</h2>
                            <p >${currentVan.price}<span>/day</span></p>
                        </div>

                    </div>
                }
                <nav>
                    <NavLink to="." end style={({ isActive }) => isActive ? activeLink : null}>Details</NavLink>
                    <NavLink to="pricing" style={({ isActive }) => isActive ? activeLink : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({ isActive }) => isActive ? activeLink : null}>Photos</NavLink>
                </nav>
            </div>
            <Outlet context={[currentVan, setCurrentVan]} />
        </section >
    )
}
