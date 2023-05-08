import React from 'react'
import Layout from '../components/layouts/Layout'

function Support() {
    return (
        <Layout includeSidebar>
            <div className='container-fluid my-5'>
                <div className="container-fluid d-flex align-items-center min-vh-100 col-6">
                    <div className="py-20 py-lg-32 bg-surface-secondary">
                        <div className="container max-w-screen-xl">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-8 text-center">
                                    {/* Heading */}
                                    <h1 className="ls-tight font-bolder mb-5">
                                        User support
                                    </h1>
                                    {/* Text */}
                                    <p className="lead mb-10">
                                        If you require assistance, please feel free to reach out to us through the following contact options:
                                    </p>
                                    <p className="lead mb-10">
                                        Email: <a href="mailto:HumanCare@contact.com">HumanCare@contact.com</a>
                                    </p>
                                    <p className="lead mb-10">Phone: <a href="tel:+56762784975">+56 762784975</a></p>
                                    <p className="lead mb-10">We will respond to your inquiry within 24 hours.</p>

                                    {/* Buttons */}
                                    {/* <div className="mx-n2">
                                    <a href="#" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
                                        Get started
                                    </a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Support