import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Users from './Users'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { GlobalContext } from '../../store/AppContext';


function LoginForm() {

    const {showModal, setShowModal} = useContext(GlobalContext);
    const {showIcon, setShowIcon} = useContext(GlobalContext); 
 
    /* Funcion que activa y desactiva el Modal */
    const handleModal = () => {
        setShowModal(!setShowModal);
    }

    return (
        <div className="container-fluid p-5 imagen-humancare">

            <div className="row">
                <div className="text-center mb-12">
                    <h1 className="ls-tight text-secondary font-bolder h2">Welcome to HumanCare</h1>
                    <p className="mt-2">Let's build someting great</p>
                </div>
                <div className="container pt-4 pb-4 opacity-75 mt-4 rounded-4 w-50 bg-container">
                    <div className="row">
                        <div className='col-md-7 mx-auto '>
                            <form >
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="email">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control border-success"
                                        id="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className=" mb-4">
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="d-flex">
                                        <input
                                            type={showIcon ? 'text' : 'password'}
                                            className="form-control rounded-start rounded-0 border-end-0 border-success border-3"
                                            id="password"
                                            placeholder="Password"
                
                                        />
                                        <Link to='' className=' bg-light text-success border rounded-end rounded-0 pt-2 px-3 border-success border-start-0 rounded-end'
                                        onClick={() => {
                                            setShowIcon(!showIcon);
                                        }}
                                        >
                                            {
                                                showIcon ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className='d-flex justify-content-center'>
                                    <Link to="/dashboard" className="btn btn-primary">
                                        Sign in
                                    </Link>
                                </div>
                            </form>

                            <div className="py-3 text-center">
                                <span className="text-xs text-uppercase fw-bold">or</span>
                            </div>
                            <div className="row text-center">
                            </div>
                            <div className="my-6 fw-bold">
                                <small>Don't have an account? </small>
                                <Link to=''
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={handleModal}
                                    className="text-primary fw-bold">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {showModal && <Users />}
        </div>

    )
}

export default LoginForm