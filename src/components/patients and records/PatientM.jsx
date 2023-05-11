import React from 'react'
import Patient from '../../img/patient.png'

function PatientM({ Name, Age, Treatment, Observations}) {

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
          >
            <i className="bi bi-eye-fill" />
          </button>
          </td>

        {/* <td>  */}
          {/* <button
            type="button"
            className="btn btn-sm btn-square btn-neutral text-danger-hover"
            onClick={() => {
              Delete(id);
              console.log('Delete: User (', id, ") -> ", Name);
            }}
          >
            <i className="bi bi-trash" />
          </button> */}
        {/* </td> */}

      </tr>
    </>
  )
}

export default PatientM