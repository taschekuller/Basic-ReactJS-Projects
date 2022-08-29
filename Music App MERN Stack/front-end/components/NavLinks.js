import React from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom"

export default function NavLinks() {
    return (
        <Router>
            <div className="row mx-auto mt-4">
            <div className="text-center ">
            <ul className="text-light list-unstyled list-inline ">
                    <li className="list-inline-item"><Link to="/dates"><h5>Dates</h5></Link></li>
                    <li className="list-inline-item"><Link to="/artist"><h5>Artist</h5></Link></li>
                    <li className="list-inline-item"><Link to="/bands"><h5>Bands</h5></Link></li>
                </ul>
            </div>
        </div>
        </Router>
    )
}
