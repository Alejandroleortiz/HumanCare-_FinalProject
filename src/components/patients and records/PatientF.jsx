import React from 'react'
import Female from '../../img/Femenino.png'

function PatientF() {
    return (
        <>

            {/* Patient F */}
            <tr>
                <td>
                    <img
                        alt="avatar"
                        src={Female}
                        className="avatar avatar-sm rounded-circle me-2"
                    />
                    <a className="text-heading font-semibold" href="#">
                        Marie Fox
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

export default PatientF