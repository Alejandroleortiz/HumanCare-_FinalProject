import React from 'react'
import Patient from '../../img/patient.png'

function PatientM({ Name, Age, Treatment, Observations, deletePatient, id }) {

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
            data-bs-target={`#modal_patient_${id}`}
          >
            <i className="bi bi-eye-fill" />
          </button>

         {/* -------------------------------------Modal -------------------------------------------- */}
          <div class="modal" id={`modal_patient_${id}`} tabindex="-1" aria-labelledby={`modal_patient_${id}`} aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content shadow-3">
                <div class="modal-header">
                  <h5 class="modal-title">{Name}</h5>
                  <div class="text-xs ms-auto">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
                <div class="modal-body">
                  <p>
                    Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
                  </p>
                </div>
                <div class="modal-footer">
                 {/* agregar elementos extras  */}
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