import React, { useContext, useEffect } from 'react'
import Layout from '../components/layouts/Layout'
import PatientM from '../components/patients and records/PatientM'
import { GlobalContext } from '../store/AppContext';




function Patients() {

    const { state: { store, actions } } = useContext(GlobalContext);

    useEffect(() => {
        actions.getPatients();
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
                                        {/* <th scope="col">Delete</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Patient M */}
                                    {/* Patient M */}


                                    { // Mapeo de Pacientes

                                        store?.currentPatient?.length > 0 ?
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
                                                        // Delete={actions?.deletePatient}
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

export default Patients