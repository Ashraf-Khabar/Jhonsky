import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Img/jhonsky_logo.png';

const Navbar = () => {
    return (
        <div data-theme="">
            <nav data-theme="luxury" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mx-auto">
                        <img src={logo} width={120} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link label-text" to="/about-us">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link label-text" to="/our-services">
                                    Our Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link label-text" to="/our-portfolio">
                                    Our Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link label-text" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link label-text" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
