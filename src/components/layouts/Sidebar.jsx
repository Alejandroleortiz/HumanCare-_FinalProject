import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <nav
                className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg"
                id="navbarVertical"
            >
                <div className="container-fluid">
                    {/* Toggler */}
                    <button
                        className="navbar-toggler ms-n2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand */}
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                        <img
                            src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                            alt="..."
                        />
                    </a>
                    {/* User menu (mobile) */}
                    <div className="navbar-user d-lg-none">
                        {/* Dropdown */}
                        <div className="dropdown">
                            {/* Toggle */}
                            <a
                                href="#"
                                id="sidebarAvatar"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="avatar-parent-child">
                                    <img
                                        alt="Image Placeholder"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        className="avatar avatar- rounded-circle"
                                    />
                                    <span className="avatar-child avatar-badge bg-success" />
                                </div>
                            </a>
                            {/* Menu */}
                            <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="sidebarAvatar"
                            >
                                <a href="#" className="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    Settings
                                </a>
                                <a href="#" className="dropdown-item">
                                    Billing
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        {/* Navigation */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">
                                    <i className="bi bi-speedometer2" /> Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/medical-records">
                                    <i className="bi bi-file-earmark-text" /> Medical Records
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/patients">
                                    <i className="bi bi-people" /> Patients
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add-patients">
                                    <i className="bi bi-person-plus" /> Add Patients
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/support">
                                    <i className="bi bi-info-circle" /> Support
                                </NavLink>
                            </li>

                        </ul>
                        {/* Divider */}
                        <hr className="navbar-divider my-5 opacity-20" />
                        {/* Navigation */}
                        <ul className="navbar-nav mb-md-4">
                            <li>
                                <div
                                    className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                                    href="#"
                                >
                                    Contacts
                                    <span className="badge bg-opacity-30 bg-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                                        13
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <img
                                                alt="Image Placeholder"
                                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar rounded-circle"
                                            />
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Marie Claire
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            Paris, FR
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <span className="avatar bg-opacity-30 bg-warning text-warning rounded-circle">
                                                JW
                                            </span>
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Michael Jordan
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            Bucharest, RO
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar rounded-circle"
                                            />
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Heather Wright
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            London, UK
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        {/* Push content down */}
                        <div className="mt-auto" />
                        {/* User (md) */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    <i className="bi bi-person-square" /> Profile
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i className="bi bi-box-arrow-left" /> Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar