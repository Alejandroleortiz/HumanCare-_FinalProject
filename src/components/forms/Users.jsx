import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Doctor from '../../img/doctor.png';
import UsuarioM from '../../img/Usuario.png';
import '../../styles/index.css';
import { GlobalContext } from '../../store/AppContext';
import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

const Users = () => {


  // const { state: { store, actions } } = useContext(GlobalContext);

  //Flux SetRole

  // const navigate = useNavigate()

  // const handleChooseRole = (role) => {
  //   actions.setRole(role)
  //   if (role === 1) {
  //     navigate('/account-medical')
  //   } else {
  //     navigate('/account-patient')
  //   }

  // }

  // useEffect(() => {
  //   if (store.currentUser !== null) navigate('/')
  // }, [])

  return (
    <>

      {/* Modal */}
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-container">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-secondary" id="exampleModalLabel">Account Selection</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">



              <Link
                onClick={() => handleChooseRole(1)}
                className="m-3 p-2 rounded-3 text-center border border-3 border-success"
                to='/account-medical' >
                <img src={Doctor} alt="Doctor User" width='50px' height='50px' />
                <p className='text-secondary fw-bold'>Medical Account</p>
              </Link>

              <Link
                onClick={() => handleChooseRole(2)}
                className="m-3 p-2 rounded text-center border border-3 border-success"
                to='/account-patient' >
                <img src={UsuarioM} alt="Doctor User" width='50px' height='50px' />
                <p className='text-secondary fw-bold'>Patient Account</p>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </>

  )

}

export default Users;