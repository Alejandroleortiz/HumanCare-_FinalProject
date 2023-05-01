import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
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
                                        className="form-control border-success border-3"
                                        id="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control border-success border-3"
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="check_example"
                                            id="check_example"
                                        />
                                        <label className="form-check-label" htmlFor="check_example">
                                            Show me Password
                                        </label>
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
                                <Link to="/Account" className="text-primary fw-bold">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default LoginForm