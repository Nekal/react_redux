import React from 'react'
import '../styles/bootstrap.css'

let HeaderComponent = ({userData, logoutClick}) => {
    return (
        <header className="navbar-inverse ">
            <div className="container">
                <div className="nav navbar-left">
                    <li><a href="/">Instructions</a></li>
                </div>

                {userData === null ? (
                    <div className="nav navbar-right">
                        <li><a href="/signin">Sign in</a></li>
                        <li><a href="/signup">Sign up</a></li>
                    </div>
                ) : (
                    <div className="nav navbar-right">
                        <li><a href={"/signin"} onClick={logoutClick}>Logout</a></li>
                    </div>
                )}
            </div>
        </header>
    )
}
export default HeaderComponent