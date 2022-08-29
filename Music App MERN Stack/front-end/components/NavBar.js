import React from "react";
// import { Form, FormControl, Button } from 'react-bootstrap'
import { FaUserAlt } from "react-icons/fa";
import NavLinks from "./NavLinks"
import { BrowserRouter as Router, Link } from "react-router-dom"


export default function NavBar() {
  return (
    <Router>
      <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/" className="homepage navbar-brand text-light"> 
              Home
            </Link>
            <div className="mx-auto">
            <NavLinks />
            </div>
            {/* <div className="col-md-2">
            <Form className="d-flex p-1">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </div> */}
            <Link to="/login" ><FaUserAlt className="userlogin ml-3" /></Link>
          </div>
        </nav>
      </div>
    </div>
    </Router>
  );
}

