import React from 'react'
import Folders from '../../img/folders.svg'

function MedicalRecord() {
  return (
    <>
      {/* Medical Recors */}
      <tr>
        <td>
          <img
            alt="Folders"
            src={Folders}
            className="avatar avatar-sm rounded-circle me-2"
          />
          <a className="text-heading font-semibold" href="#">
            Radiography
          </a>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover"
          >
            <i className="bi bi-eye-fill" />
          </button></td>
        <td>
          <a className="text-heading font-semibold" href="#">
            PDF
          </a>
        </td>
        <td>
          <a className="text-heading font-semibold" href="#">
            05/06/2023
          </a>
        </td>
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

export default MedicalRecord