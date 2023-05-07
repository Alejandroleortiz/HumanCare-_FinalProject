import React, { useContext } from 'react'
import Layout from '../components/layouts/Layout'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../store/AppContext';
import PatientM from '../components/patients and records/PatientM';
import PatientF from '../components/patients and records/PatientF';
import MedicalRecord from '../components/patients and records/MedicalRecord';


function Dashboard() {

    useEffect(() => {
        getData();
    }, [])

    const [data, setData] = useState([]);

    // Comunicacion HTTP: GET, POST, PUT, DELETE

    //Variable Url -> Creacion del Recurso
    const [url] = useState('http://localhost:3001');

    // Fetch -> GET -----------------------------------------------------------

    const getData = () => {

        const options = {
            method: 'GET',
            //  body:
            headers: {
                'Content-Type': 'application/json'
            }

        }

        fetch(`${url}/notes`, options)
            .then((response) => {
                console.log(response)

                return response.json(); // Respuesta del Servidor
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    //-------------------------------------------------------------------------

    const { state: { store, actions } } = useContext(GlobalContext)

    return (
        <>
            <Layout includeSidebar >
                <div className="container-fluid">
                    <div className="row g-6 mb-6 my-3">
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                Budget
                                            </span>
                                            <span className="h3 font-bold mb-0">$750.90</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                <i className="bi bi-credit-card" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-0 text-sm">
                                        <span className="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                            <i className="bi bi-arrow-up me-1" />
                                            13%
                                        </span>
                                        <span className="text-nowrap text-xs text-muted">
                                            Since last month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                New projects
                                            </span>
                                            <span className="h3 font-bold mb-0">215</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                <i className="bi bi-people" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-0 text-sm">
                                        <span className="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                            <i className="bi bi-arrow-up me-1" />
                                            30%
                                        </span>
                                        <span className="text-nowrap text-xs text-muted">
                                            Since last month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                Total hours
                                            </span>
                                            <span className="h3 font-bold mb-0">1.400</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                <i className="bi bi-clock-history" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-0 text-sm">
                                        <span className="badge badge-pill bg-opacity-30 bg-danger text-danger me-2">
                                            <i className="bi bi-arrow-down me-1" />
                                            -5%
                                        </span>
                                        <span className="text-nowrap text-xs text-muted">
                                            Since last month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                                Work load
                                            </span>
                                            <span className="h3 font-bold mb-0">95%</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                <i className="bi bi-minecart-loaded" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-0 text-sm">
                                        <span className="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                            <i className="bi bi-arrow-up me-1" />
                                            10%
                                        </span>
                                        <span className="text-nowrap text-xs text-muted">
                                            Since last month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-7">
                        <div className="card-header">
                            <h5 className="mb-0">Applications</h5>
                        </div>
                        <div className="table-responsive">


                            {
                                store?.currentUser && store?.currentUser?.user?.speciality !== "Patient Account" ?//Limitar la visualizacion segun el rol
                                    (
                                        <>
                                            {/* Contenido para usuarios con especialidad diferente de Patient Account */}
                                            <table className="table table-hover table-nowrap">
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

                                                        {/* Patient M */}
                                                        <PatientM />

                                                        {/* Patient F */}
                                                        <PatientF />

                                                    </tbody>
                                                </table>
                                            </table>

                                        </>
                                    ) : (
                                        <>
                                            {/* Contenido para usuarios con especialidad Patient Account */}
                                            <table className="table table-hover table-nowrap">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">View</th>
                                                        <th scope="col">File</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {/* Medical Recors */}
                                                    <MedicalRecord/>

                                                    {/* Medical Recors */}
                                                    <MedicalRecord/>

                                                </tbody>
                                            </table>


                                        </>
                                    )
                            }


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

export default Dashboard