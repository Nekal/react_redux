import React from 'react'
import {connect} from "react-redux";
import '../styles/bootstrap.css'
import {Link} from "react-router-dom";

let Header = () => {
    return (

        <div className="">
            <Link className="nav-link" to="#">Home</Link>
            <Link className="nav-link" to="#">Home </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

Header = connect()(Header)
export default Header