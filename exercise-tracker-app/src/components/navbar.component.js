import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">Exercise-Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}