import React from 'react'
import Masculine from '../../img/Usuario.png'

function PatientM() {
  return (
    <>
      {/* Patient M */}
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
    </>
  )
}

export default PatientM