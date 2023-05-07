import React from 'react'
import Layout from '../components/layouts/Layout'
import Masculine from '../img/Usuario.png'
import Female from '../img/Femenino.png'

function Patients() {
    return (
        <>
            <Layout includeSidebar>
                <div className="container-fluid my-5">
                    <div className="row g-6 mb-6">
                    </div>
                    <div className="card mb-7">
                        <div className="card-header">
                            <h5 className="mb-0">Patient List</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Treatment</th>
                                        <th scope="col">Observations</th>
                                        <th scope="col">View</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="avatar"
                                                src={Masculine}
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Robert Fox
                                            </a>
                                        </td>
                                        <td>28</td>
                                        <td>
                                            <a className="text-heading font-semibold" href="#">
                                                Chemotherapy
                                            </a>
                                        </td>
                                        <td>Lorem ipsum dolor sit </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-eye-fill" />
                                            </button></td>

                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>

                                    </tr>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="avatar"
                                                src={Female}
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Marie Fox
                                            </a>
                                        </td>
                                        <td>28</td>
                                        <td>
                                            <a className="text-heading font-semibold" href="#">
                                                Chemotherapy
                                            </a>
                                        </td>
                                        <td>Lorem ipsum dolor sit </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-eye-fill" />
                                            </button></td>

                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>

                                    </tr>



                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer border-0 py-5">
                            <span className="text-muted text-sm">
                                Showing 10 items out of 250 results found
                            </span>
                        </div>
                    </div>
                </div>
            </Layout>
            {/* Card stats */}

        </>
    )
}

export default Patients