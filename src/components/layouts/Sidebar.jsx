import React, { useContext } from 'react'
import { NavLink} from 'react-router-dom'
import HumanCare from '../../img/Logo.png';
import { GlobalContext } from '../../store/AppContext';

function Sidebar() {

    const {state:{store,actions}} = useContext(GlobalContext)
    
    return (
        <>
            <nav
                className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light
                 bg-light border-bottom border-bottom-lg-0 border-end-lg"
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
                    <NavLink className="navbar-brand mx-4" to="/dashboard">
                        <img
                            className='px-4 mx-3'
                            src={HumanCare}
                            alt="HumanCare Logo"
                        />
                        <h4 className='mt-2'>HUMANCARE</h4>
                    </NavLink>
                    {/* User menu (mobile) */}
                    <div className="navbar-user d-lg-none">
                        {/* Dropdown */}
                        <div className="dropdown">
                            {/* Toggle */}
                            <NavLink
                                to="#"
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
                            </NavLink>
                            {/* Menu */}
                            <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="sidebarAvatar"
                            >
                                <NavLink to="#" className="dropdown-item">
                                    Profile
                                </NavLink>
                                <NavLink to="#" className="dropdown-item">
                                    Settings
                                </NavLink>
                                <NavLink to="#" className="dropdown-item">
                                    Billing
                                </NavLink>
                                <hr className="dropdown-divider" />
                                <NavLink to="#" className="dropdown-item">
                                    Logout
                                </NavLink>
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
                                    to="#"
                                >
                                    Contacts
                                    <span className="badge bg-opacity-30 bg-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                                        13
                                    </span>
                                </div>
                            </li>
                            <li>
                                <NavLink to="#" className="nav-link d-flex align-items-center">
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
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="nav-link d-flex align-items-center">
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
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="nav-link d-flex align-items-center">
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
                                </NavLink>
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
                                <button className="nav-link" onClick={actions.logout}>
                                    <i className="bi bi-box-arrow-left" /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar