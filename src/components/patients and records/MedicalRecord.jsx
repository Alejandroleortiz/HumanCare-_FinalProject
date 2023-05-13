import React from 'react'
import Folders from '../../img/folders.svg'


function MedicalRecord({Filename, View, Date, deleteFile, id}) {

  const handleDelete = () => {
    deleteFile(id)
   };

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
            {Filename}
          </a>
        </td>

        <td>
          <a className="text-heading font-semibold">
            {Date}
          </a>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover"
            onClick={() => window.open(View, "_blank")}
          >
            <i className="bi bi-eye-fill" />
          </button></td>
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

export default MedicalRecord