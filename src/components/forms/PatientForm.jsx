import React, { useContext, useEffect } from 'react'
import AddPatient from '../../img/add-patient.png'
import { GlobalContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';

function PatientForm() {

    const { state: { store, actions } } = useContext(GlobalContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (store.currentUser !== null) navigate('/patients')
    }, [])


    return (
        <>
            <>
                {/* Main */}
                <main className="py-6 bg-surface-secondary my-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-7 mx-auto">
                                {/* Profile picture */}
                                <div className="card shadow border mt-4 mb-10">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <a
                                                        href="#"
                                                        className="avatar avatar-lg bg-white  text-white"
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={AddPatient}
                                                        />
                                                    </a>
                                                    <div className="ms-4">
                                                        <span className="h4 d-block mb-0">Add Patient</span>
                                                        <a href="#" className="text-sm font-semibold text-muted">
                                                            Patient Form
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Form */}
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    actions.addPatient(e, navigate)
                                }} className="mb-6 my-5 card shadow border mt-4 mb-10 p-5">

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="full_name">
                                                    Full Name
                                                </label>
                                                <input type="text" className="form-control" id="full_name" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <label className="form-label" htmlFor="age">
                                                    Age
                                                </label>
                                                <input type="tex" className="form-control" id="age" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="">
                                                <label className="form-label" htmlFor="identity_card">
                                                    Identity Card
                                                </label>
                                                <input type="tel" className="form-control" id="identity_card" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col-md-6 g-5">
                                            <div className="">
                                                <label className="form-label" htmlFor="adress">
                                                    Adress
                                                </label>
                                                <input type="text" className="form-control" id="adress" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 g-5">
                                            <div className="">
                                                <label className="form-label" htmlFor="phone_number">
                                                    Phone number
                                                </label>
                                                <input type="text" className="form-control" id="phone_number" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="reason_for_consultation">
                                                    Reason for Consultation
                                                </label>
                                                <input type="text" className="form-control" id="reason_for_consultation" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="current_illness">
                                                    Current illness
                                                </label>
                                                <input
                                                    type="tex"
                                                    className="form-control"
                                                    id="current_illness"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="">
                                                <label className="form-label" htmlFor="criminal_record">
                                                    Criminal Record
                                                </label>
                                                <input type="text" className="form-control" id="criminal_record" />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="">
                                                <label className="form-label" htmlFor="family_history">
                                                    Family history
                                                </label>
                                                <input type="text" className="form-control" id="family_history" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="surgical_history">
                                                    Surgical history
                                                </label>
                                                <input type="text" className="form-control" id="surgical_history" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="physical_examination">
                                                    Physical examination
                                                </label>
                                                <input type="text" className="form-control" id="physical_examination" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="diagnosis">
                                                    Diagnosis
                                                </label>
                                                <input type="text" className="form-control" id="diagnosis" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <label className="form-label" htmlFor="treatment">
                                                    Treatment
                                                </label>
                                                <input type="text" className="form-control" id="treatment" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="">
                                                <label className="form-label" htmlFor="observations">
                                                    Observations
                                                </label>
                                                <input type="text" className="form-control" id="observations" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end my-5">
                                        <button type="button" className="btn btn-sm btn-neutral me-2">
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-sm btn-primary">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </>

        </>
    )
}

export default PatientForm