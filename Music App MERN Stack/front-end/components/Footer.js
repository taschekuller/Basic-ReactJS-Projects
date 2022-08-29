import React from 'react'
import { FaTwitter, FaTwitch, FaInstagram } from "react-icons/fa";
import { BrowserRouter as Router,Link } from "react-router-dom"

export default function Footer() {
    return (
        <Router>
            <div className="container">
            <div className="row mt-4 footer mx-auto">
            <div className="col-lg-4 mt-4 text-center">
            <ul className="text-light list-unstyled">
                    <li><Link to="aboutus">About Us</Link></li>
                    <li><Link to="works">Works</Link></li>
                    <li><Link to="fortherecords">For the Records</Link></li>
                </ul>
            </div>

            <div className="col-lg-4 mt-4 text-center">
            <ul className="text-light list-unstyled">
                    <li><Link to="support">Support</Link></li>
                    <li><Link to="webplayer">Web Player</Link></li>
                    <li><Link to="forthedevelopers">For the Developers</Link></li>
                </ul>
            </div>

            <div className="col-lg-4 mt-4 text-center ">
            <ul className="text-light list-unstyled list-inline">
                    <li className="list-inline-item"><Link to="https://twitter.com/"><FaTwitter size="36px" /></Link></li>
                    <li className="list-inline-item"><Link to="https://www.twitch.com/"><FaTwitch size="36px" /></Link></li>
                    <li className="list-inline-item"><Link to="https://www.instagram.com/"><FaInstagram size="36px" /></Link></li>
                </ul>
            </div>
            </div>
        </div>
        </Router>
    )
}
