import React, { useEffect } from "react";
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/index.css';
import { GlobalContext } from "../store/AppContext";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const AccountPatient = () => {

  const { state: { store, actions }, icons1, setIcons1, icons2, setIcons2 } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (store.currentUser !== null) navigate('/dashboard')
  }, [])



  return (

    <div className="container-fluid imagen-humancare">

      <h1 className="text-secondary text-center mb-3 pt-4">
        HUMANCARE
      </h1>
      {/* Main */}

      <div className="container w-50 rounded-4 bg-container opacity-75" >
        <div className="row">
          <div className="col-md-10 mx-auto">

            {/* Form */}
            <div className="mb-4 mt-4">
              <h3 className="mb-0 text-secondary">HumanCare Patient Account</h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                actions.register(e, navigate, 2)
              }}
              className="mb-5">

              {/*------------------------------------------------------------ FILA 1 -------------------------------------------------------------------------- */}

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="">
                    <label className="form-label" htmlFor="first_name">
                      First name
                    </label>
                    <input type="text" className="form-control border-success border-3"
                      id="first_name" placeholder="Write your first name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <label className="form-label" htmlFor="last_name">
                      Last name
                    </label>
                    <input type="text" className="form-control border-success border-3"
                      id="last_name" placeholder="Write your last name" />
                  </div>
                </div>
              </div>

              {/*------------------------------------------------------------ FILA 2 -------------------------------------------------------------------------- */}

              <div className="row mb-3">
                <div className="col-md-6 ">
                  <label className="form-label" htmlFor="Speciality" >
                    Gender
                  </label>
                  {/* <input type="text" className="form-control" id="Speciality" /> */}
                  <select
                    className="form-select border-success border-3"
                    id="gender"
                    placeholder="Choose your area of interest"
                    aria-label="Default select example"
                  >
                    <option defaultValue="" >Gender</option>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>

                  </select>
                </div>
                <div className="col-md-6">

                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input type="email" className="form-control border-success border-3"
                    id="email"
                    placeholder="User@humancare.com"
                  />

                </div>
              </div>

              {/*------------------------------------------------------------ FILA 3 -------------------------------------------------------------------------- */}

              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label" htmlFor="phone_number">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="form-control border-success border-3"
                    placeholder="(xx) xxx - xxxxxxx"
                    id="phone_number"
                  />
                </div>
              </div>


              {/*------------------------------------------------------------ FILA 4  -------------------------------------------------------------------------- */}

              <div className="row">
                <div className="col-md-6">

                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input type="text"
                    className="form-control border-success border-3"
                    placeholder="Write your City"
                    id="city" />

                </div>
                <div className="col-md-6">

                  <label className="form-label " htmlFor="country">
                    Country
                  </label>
                  <select
                    className="form-select border-success border-3"
                    id="country"
                    aria-label="Default select example"
                  >
                    <option defaultValue="">Country</option>
                    <option value={'Chile'}>Chile</option>
                    <option value={'United State'}>United State</option>
                    <option value={'Venezuela'}>Venezuela</option>
                  </select>
                </div>
              </div>

              {/*------------------------------------------------------------ FILA 5 -------------------------------------------------------------------------- */}

              <div className="row mb-2 mt-2">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="d-flex">
                    <input
                      type={icons1 ? 'text' : 'password'}
                      className="form-control rounded-start rounded-0 border-end-0 border-success border-3"
                      id="password1"
                      placeholder="Password"

                    />
                    <Link to='' className=' bg-light text-success border rounded-end rounded-0 pt-2 px-3 border-success border-start-0 rounded-end'
                      onClick={() => {
                        setIcons1(!icons1);
                      }}
                    >
                      {
                        icons1 ? <FaEyeSlash /> : <FaEye />
                      }
                    </Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="password">
                    Repeat Password
                  </label>
                  <div className="d-flex">
                    <input
                      type={icons2 ? 'text' : 'password'}
                      className="form-control rounded-start rounded-0 border-end-0 border-success border-3"
                      id="password"
                      placeholder="Password"
                    />
                    <Link to='' className=' bg-light text-success border rounded-end rounded-0 pt-2 px-3 border-success border-start-0 rounded-end'
                      onClick={() => {
                        setIcons2(!icons2);
                      }}
                    >
                      {
                        icons2 ? <FaEyeSlash /> : <FaEye />
                      }
                    </Link>
                  </div>
                </div>
              </div>


              {/*------------------------------------------------------------ FILA 6 -------------------------------------------------------------------------- */}

              <div className="text-end mt-5">
                <Link to='/'>
                  <button type="button" className="btn btn-sm btn-danger me-2" >
                    Cancel
                  </button>
                </Link>

                <button type="submit" className="btn btn-sm btn-success">
                  Save
                </button>

              </div>
            </form>

          </div>
        </div>
      </div>


    </div>

  )
}

export default AccountPatient;