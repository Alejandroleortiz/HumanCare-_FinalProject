import React, { useContext } from 'react'
import Layout from '../components/layouts/Layout'
import { useEffect, useState } from 'react';
import { GlobalContext } from '../store/AppContext';
import PatientM from '../components/patients and records/PatientM';
import MedicalRecord from '../components/patients and records/MedicalRecord';
import DataPatients from '../components/layouts-dashboard/DataPatients';
import DataRecords from '../components/layouts-dashboard/DataRecords';
import "../styles/index.css"



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
                                                        <th scope="col" className="invisible"></th>
                                                        <th scope="col" className="invisible01" >Full Name</th>
                                                        <th scope="col" className="invisible0">Age</th>
                                                        <th scope="col" className="invisible1">Treatment</th>
                                                        <th scope="col" className="invisible2">Observations</th>
                                                        <th scope="col">View</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {/* Patient M */}
                                                    { // Mapeo de Pacientes

                                                        store?.currentPatient?.length > 0 &&
                                                        store?.currentPatient?.map((data) => {
                                                            console.log("aqui estoy", store?.currentPatient?.length);
                                                            return (
                                                                <PatientM
                                                                    key={data.id}
                                                                    id={data.id}
                                                                    Name={data.full_name}
                                                                    Age={data.age}
                                                                    Treatment={data.treatment}
                                                                    Observations={data.observations}
                                                                    identityCard={data.identity_card}
                                                                    Adress={data.adress}
                                                                    phoneNumber={data.phone_number}
                                                                    Reason={data.reason_for_consultation}
                                                                    currentIllness={data.current_illness}
                                                                    criminalRecords={data.criminal_record}
                                                                    familyHistory={data.family_history}
                                                                    surgicalHistory={data.surgical_history}
                                                                    physicalExamination={data.physical_examination}
                                                                    Diagnosis={data.diagnosis}
                                                                    deletePatient={actions.deletePatient}


                                                                />
                                                            )
                                                        })
                                                    }

                                                </tbody>

                                            </table>
                                            <div className="card-footer border-0 py-5">
                                                <span className="text-muted text-sm">
                                                    Showing {store?.currentPatient?.length} items out of {store?.currentPatient?.length} results found
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Contenido para usuarios con especialidad Patient Account */}
                                            <table className="table table-hover table-nowrap">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">Filename</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">View</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Medical Records */}

                                                    { // Mapeo de Records

                                                        store?.currentRecords?.length > 0 &&
                                                        store?.currentRecords?.map((data) => {
                                                            console.log("aqui estoy", store?.currentRecords?.length);
                                                            return (
                                                                <MedicalRecord
                                                                    key={data.id}
                                                                    id={data.id}
                                                                    Filename={data.filename}
                                                                    View={data.file}
                                                                    Date={data.date}
                                                                    deleteFile={actions.deleteMedicalFile}
                                                                />
                                                            )
                                                        })
                                                    }


                                                </tbody>
                                            </table>

                                            <div className="card-footer border-0 py-5">
                                                <span className="text-muted text-sm">
                                                    Showing {store?.currentRecords?.length} items out of {store?.currentRecords?.length} results found
                                                </span>
                                            </div>
                                        </>
                                    )
                            }


                        </div>

                    </div>
                </div>
            </Layout>
            {/* Card stats */}
        </>
    )
}

export default Dashboard