import React from 'react'
import Layout from '../components/layouts/Layout'
import '../styles/index.css';
import PatientForm from '../components/forms/PatientForm';


function AddPatient() {



    return (
        <Layout includeSidebar>
            <div className="container-fluid">
                <PatientForm />
            </div>
        </Layout >
    )
}

export default AddPatient