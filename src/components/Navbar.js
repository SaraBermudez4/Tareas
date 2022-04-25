import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Pestaña 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">pestaña 2</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>;
};
