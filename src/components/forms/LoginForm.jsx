import React from 'react'
import { NavLink, Link} from 'react-router-dom'

function LoginForm() {
    return (
        <div className=" my-5 px-5 py-5 p-lg-0">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                    <div className="row">
                        <div className="col-lg-10 col-md-9 col-xl-7 mx-auto">
                            <div className="text-center mb-12">
                                {/* <Link class="d-inline-block" to="#">
                      <img src="https://preview.webpixels.io/web/img/logos/clever-primary-sm.svg" class="h-12" alt="...">

          		</Link> */}
                                <span className="d-inline-block d-lg-block h1 mb-lg-6 me-3">
                                    👋
                                </span>
                                <h1 className="ls-tight font-bolder h2">Welcome back!</h1>
                                <p className="mt-2">Let's build someting great</p>
                            </div>
                            <form>
                                <div className="mb-5">
                                    <label className="form-label" htmlFor="email">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="mb-5">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="check_example"
                                            id="check_example"
                                        />
                                        <label className="form-check-label" htmlFor="check_example">
                                            Keep me logged in
                                        </label>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Link to="/dashboard" className="btn btn-primary w-full">
                                        Sign in
                                    </Link>
                                </div>
                            </form>
                            <div className="py-3 text-center">
                                <span className="text-xs text-uppercase font-semibold">or</span>
                            </div>
                            <div className="row text-center">
                            </div>
                            <div className="my-6">
                                <small>Don't have an account? </small>
                                <Link to="/" className="text-warning text-sm font-semibold">
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