import React, { useContext } from 'react'
import Layout from '../components/layouts/Layout'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../store/AppContext';
import PatientM from '../components/patients and records/PatientM';
import PatientF from '../components/patients and records/PatientF';
import MedicalRecord from '../components/patients and records/MedicalRecord';
import DataPatients from '../components/layouts-dashboard/DataPatients';
import DataRecords from '../components/layouts-dashboard/DataRecords';



function Dashboard() {
    //-------------------------------------------------------------------------

    const { state: { store, actions } } = useContext(GlobalContext)

    useEffect(() => {
        actions.getPatients(); // Llama a la función getPatients aquí
    }, []);

    return (
        <>
            <Layout includeSidebar >
                <div className="container-fluid">

                    {/* Estadisticas de data Patients o Records */}


                    {
                        store?.currentUser && store?.currentUser?.user?.speciality !== "Patient Account" ?//Limitar la visualizacion segun el rol
                            (
                                <>
                                    {/* Contenido para usuarios con especialidad diferente de Patient Account */}
                                    <DataPatients />

                                </>
                            ) : (
                                <>
                                    {/* Contenido para usuarios con especialidad Patient Account */}
                                    <DataRecords />

                                </>
                            )
                    }





                    {/* Inicia Records o Patients */}
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

                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">Full Name</th>
                                                        <th scope="col">Age</th>
                                                        <th scope="col">Treatment</th>
                                                        <th scope="col">Observations</th>
                                                        <th scope="col">View</th>
                                                        {/* <th scope="col">Delete</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {/* Patient M */}
                                                    { // Mapeo de Pacientes

                                                        store?.patients?.length > 0 ?
                                                            store?.patients?.map((data) => {
                                                                console.log("aqui estoy", store?.patients?.length);
                                                                return (
                                                                    <PatientM
                                                                        key={data.id}
                                                                        Name={data.full_name}
                                                                        Age={data.age}
                                                                        Treatment={data.treatment}
                                                                        Observations={data.observations}
                                                                    />
                                                                )
                                                            })
                                                            :
                                                            (<>
                                                            </>)
                                                    }

                                                </tbody>

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
                                                    <MedicalRecord />

                                                    {/* Medical Recors */}
                                                    <MedicalRecord />

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