import React from 'react'
import {connect} from "react-redux";
import '../styles/bootstrap.css'

let Header = () => {
    return (
        <header className="navbar-inverse ">
            <div className="container">
                <div className="nav navbar-left">
                    <li><a href="/">Instructions</a></li>
                </div>
                <div className="nav navbar-right">
                    <li><a href="/signin">Sign in</a></li>
                    <li><a href="/signup">Sign up</a></li>
                </div>
            </div>
        </header>
    )
}

Header = connect()(Header)
export default Header