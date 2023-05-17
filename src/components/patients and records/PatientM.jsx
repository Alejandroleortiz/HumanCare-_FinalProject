import React from 'react'
import Patient from '../../img/patient.png'
import HumanCare from '../../img/Logo.png'

function PatientM({ Name, Age,
  deletePatient, id, identityCard, Adress, phoneNumber,
  Reason, currentIllness, criminalRecords, familyHistory, surgicalHistory,
  physicalExamination, Diagnosis, Treatment, Observations }) {

  const handleDelete = () => {
    deletePatient(id)
  }

  return (
    <>
      {/* Patient M */}
      <tr>
        <td>
          <img
            alt="avatar"
            src={Patient}
            className="avatar avatar-sm rounded-circle me-2"
          />
        </td>
        <td>
          <a className="text-heading font-semibold" href="#">
            {Name}
          </a>
        </td>
        <td>{Age}</td>
        <td>
          <a className="text-heading font-semibold" href="#">
            {Treatment}
          </a>
        </td>
        <td>{Observations} </td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover"
            data-bs-toggle="modal"
            data-bs-target={`#modal_example_${id}`}
          >
            <i className="bi bi-eye-fill" />
          </button>

          {/* -------------------------------------Modal -------------------------------------------- */}
          {/* <div
            className="modal"
            id={`modal_example_${id}`}
            tabIndex={-1}
            aria-labelledby={`modal_example_${id}`}
            aria-hidden="true"
          >
           
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content shadow-3">
                <div className="modal-header">
                  <h5 className="modal-title">{Name}</h5>
                  <div className="text-xs ms-auto">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                </div>
                <div className="modal-body">
                  <p>
                    for lightboxes, user notifications, or completely custom content.
                  </p>
                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div> */}
          {/* -------------------------------------Modal -------------------------------------------- */}

          {/* Modal */}
          <div className="modal fade" id={`modal_example_${id}`} tabIndex="-1"
            aria-labelledby={`modal_example_${id}`} aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-container">
                <div className="modal-header ">
                  <img src={HumanCare} alt="HumanCare Logo" width='30px' height='30px' />
                  <h1 className="modal-title fs-5 ms-2 text-secondary" id="exampleModalLabel">
                    HUMANCARE PATIENT HISTORY
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  {/*----------------------------------------------------------------------------------------------------------------------------*/}

                  {/* Main */}
                  <main className="py-3 bg-surface-secondary my-2">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-12 mx-auto">

                          <div className="row mb-3">

                            <div className="col-md-6">
                              <div className="">
                                <label className="form-label" htmlFor="full_name">
                                  Full Name
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Name}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="">
                                <label className="form-label" htmlFor="age">
                                  Age
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Age}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="">
                                <label className="form-label" htmlFor="identity_card">
                                  Identity Card
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {identityCard}
                                </p>
                              </div>
                            </div>

                          </div>

                          <div className="row mb-5">
                            <div className="col-md-6 g-5">
                              <div className="">
                                <label className="form-label" >
                                  Adress
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Adress}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6 g-5">
                              <div className="">
                                <label className="form-label">
                                  Phone Number
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {phoneNumber}
                                </p>
                              </div>
                            </div>

                          </div>

                          <div className="row g-5">

                            <div className="col-md-6">
                              <div className="">
                                <label className="form-label" htmlFor="reason_for_consultation">
                                  Reason for Consultation
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Reason}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="">
                                <label className="form-label" htmlFor="current_illness">
                                  Current illness
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {currentIllness}
                                </p>
                              </div>
                            </div>

                            <div className="col-3">
                              <div className="">
                                <label className="form-label" htmlFor="criminal_record">
                                  Criminal Record
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {criminalRecords}
                                </p>
                              </div>
                            </div>

                            <div className="col-9">
                              <div className="">
                                <label className="form-label" htmlFor="family_history">
                                  Family history
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {familyHistory}
                                </p>
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="">
                                <label className="form-label" htmlFor="surgical_history">
                                  Surgical history
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {surgicalHistory}
                                </p>
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="">
                                <label className="form-label" htmlFor="physical_examination">
                                  Physical examination
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {physicalExamination}
                                </p>
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="">
                                <label className="form-label" htmlFor="diagnosis">
                                  Diagnosis
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Diagnosis}
                                </p>
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="">
                                <label className="form-label" htmlFor="treatment">
                                  Treatment
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Treatment}
                                </p>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="">
                                <label className="form-label" htmlFor="observations">
                                  Observations
                                </label>
                                <p className="bg-Account p-2 rounded fw-bold text-light text-center">
                                  {Observations}
                                </p>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </main>

                  {/*----------------------------------------------------------------------------------------------------------------------------*/}
                </div>

              </div>
            </div>
          </div>


        </td>

        <td>
          <button
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover"
            onClick={handleDelete}
          >
            <i className="bi bi-trash" />
          </button>
        </td>

      </tr>
    </>
  )
}

export default PatientM