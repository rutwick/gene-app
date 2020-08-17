import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <header>
            <div className="logo-wrapper">
                <Link className="brand-logo" to="/">Gene DB</Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Navbar)