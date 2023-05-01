import React from "react";
import { Link } from 'react-router-dom'
import '../styles/index.css';

const Account = () => {
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
              <h3 className="mb-0 text-secondary">HumanCare Medical Account</h3>
            </div>
            <form className="mb-6">
              <div className="row mb-4">
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
              <div className="row g-5">
                <div className="col-md-6">
                  <div className="">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input type="email" className="form-control border-success border-3" 
                    id="email" 
                    placeholder="User@humancare.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
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
                <div className="col-12">

                  <label className="form-label" htmlFor="Speciality" >
                    Speciality
                  </label>
                  {/* <input type="text" className="form-control" id="Speciality" /> */}
                  <select
                    className="form-select border-success border-3"
                    id="Speciality"
                    placeholder="Choose your area of interest"
                    aria-label="Default select example"
                  >
                    <option defaultValue="" >Choose your area of interest</option>
                    <option value={1}>Medicina General</option>
                    <option value={2}>Pediatria</option>
                    <option value={3}>Medicina Interna</option>
                    <option value={4}>Ginecologia</option>
                    <option value={5}>Neurologia</option>
                    <option value={6}>Oftalmologia</option>
                  </select>

                </div>
                <div className="col-md-6">
                  <div className="">
                    <label className="form-label" htmlFor="city">
                      City
                    </label>
                    <input type="text" 
                    className="form-control border-success border-3" 
                    placeholder="Write your City"
                    id="city" />
                  </div>
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
                    <option value={1}>Chile</option>
                    <option value={2}>United State</option>
                    <option value={3}>Venezuela</option>
                  </select>

                </div>

                <div className="mb-2 mt-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control border-success border-3"
                        id="password1"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="password">
                        Repeat Password
                      </label>
                      <input
                        type="password"
                        className="form-control border-success border-3"
                        id="password2"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>
                </div>

                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        name="check_primary_address1"
                        id="check_primary_address1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_primary_address"
                      >
                        Show me Password
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        name="check_primary_address2"
                        id="check_primary_address2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_primary_address"
                      >
                        Show me Password
                      </label>
                    </div>
                  </div>
                </div>
              

              <div className="text-end mt-3 mb-3">
                <Link to="/">
                  <button type="button" className="btn btn-sm btn-danger me-2" >
                    Cancel
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button type="submit" className="btn btn-sm btn-success">
                    Save
                  </button>
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>


    </div>

  )
}

export default Account;