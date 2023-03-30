import React from "react"
// import van from "../vanImg.png"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home">
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans" className="home-btn">Find your van</Link>

        </div>
    )
}
export default Home