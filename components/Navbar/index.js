import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import './navbar.css';

const Navbar = (props) => {
    return (
        <header>
            <div className="logo-wrapper">
                <h2>Gene DB</h2>
            </div>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li>
                        <a href="https://github.com/rutwick/gene-app" target="_blank">Source</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Navbar)