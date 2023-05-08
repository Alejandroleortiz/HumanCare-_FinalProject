import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import HumanCare from '../../img/Logo.png';
import { GlobalContext } from '../../store/AppContext';
import Female from '../../img/woman.png'
import Masculine from '../../img/man.png'

function Sidebar() {

    const { state: { store, actions } } = useContext(GlobalContext)

    return (
        <>


            <nav
                className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light
                 bg-light border border-top-0 border-bottom-0 min-vh-100"
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

                    </div>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        {/* Navigation */}
                        <ul className="navbar-nav">

                            {
                                store?.currentUser && store?.currentUser?.user?.speciality !== "Patient Account" ?//Limitar la visualizacion segun el rol
                                    (
                                        <>
                                            {/* Contenido para usuarios con especialidad diferente de Patient Account */}
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/dashboard">
                                                    <i className="bi bi-speedometer2" /> Dashboard
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

                                        </>
                                    ) : (
                                        <>
                                            {/* Contenido para usuarios con especialidad Patient Account */}
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
                                                <NavLink className="nav-link" to="/add-records">
                                                    <i className="bi bi-folder-plus" /> Add Medical Records
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/support">
                                                    <i className="bi bi-info-circle" /> Support
                                                </NavLink>
                                            </li>


                                        </>
                                    )
                            }

                            {/* Divider */}

                            <hr className="navbar-divider my-5 opacity-20" />

                            <li>
                                <div
                                    className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                                    to="#"
                                >
                                    Active Users
                                    <span className="badge bg-opacity-30 bg-success text-white rounded-pill d-inline-flex align-items-center ms-4">
                                        1
                                    </span>
                                </div>
                            </li>
                            <li>
                                <NavLink to="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">

                                            {
                                                store?.currentUser && store?.currentUser?.user?.gender !== "Female" ?//Limitar la visualizacion segun el rol
                                                    (
                                                        <>
                                                            {/* Contenido para usuarios con genero diferente a Female */}
                                                            <img
                                                                alt="Image Placeholder"
                                                                src={Masculine}
                                                                className="avatar rounded-circle"
                                                            />

                                                        </>
                                                    ) : (
                                                        <>
                                                            {/* Contenido para usuarios con genero Female */}
                                                            <img
                                                                alt="Image Placeholder"
                                                                src={Female}
                                                                className="avatar rounded-circle"
                                                            />

                                                        </>
                                                    )
                                            }
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            {store?.currentUser?.user?.first_name} {store?.currentUser?.user?.last_name}
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            {store?.currentUser?.user?.speciality}
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-patch-check" />
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    <i className="bi bi-person" /> Profile
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