import React, { useContext, useEffect } from 'react'
import Layout from '../components/layouts/Layout'
import MedicalRecord from '../components/patients and records/MedicalRecord'
import { GlobalContext } from '../store/AppContext';



function MedicalRecords() {

    const { state: { store, actions } } = useContext(GlobalContext);

    useEffect(() => {
        actions.getFiles();
        // actions.deletePatient(); // Llama a la función getPatients aquí
    }, []);


    return (
        <>
            <Layout includeSidebar>
                <div className="container-fluid my-5">
                    <div className="row g-6 mb-6">
                    </div>
                    <div className="card mb-7">
                        <div className="card-header">
                            <h5 className="mb-0">Applications</h5>
                        </div>
                        <div className="table-responsive ">
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

                                        store?.currentRecords?.length > 0 ?
                                            store?.currentRecords?.map((data) => {
                                                console.log("aqui estoy", store?.currentRecords?.length);
                                                return (
                                                    <MedicalRecord
                                                        key={data.id}
                                                        id={data.id}
                                                        Filename={data.filename}
                                                        View = {data.file}
                                                        Date={data.date}
                                                    />
                                                )
                                            })
                                            :
                                            (<>

                                            </>)
                                    }


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

export default MedicalRecords