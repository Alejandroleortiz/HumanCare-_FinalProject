import React from 'react'
import Layout from '../components/layouts/Layout'
import RecordsForm from '../components/forms/RecordsForm'

function AddRecords() {
    return (
        <Layout includeSidebar>
            <div className="container-fluid">
                <>
                    {/* Hello world */}
                    {/* Header */}
                    <header className="pt-5 bg-surface-secondary">
                        <div className="container-xl">
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-12 mb-3 mb-md-0">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">Add Records</h1>
                                    </div>
                                    {/* Actions */}
                                    <div className="col-md-6 col-12 text-md-end">
                                        <div className="mx-n1">
                                            <a href="#" className="btn d-inline-flex btn-sm btn-neutral mx-1">
                                                <span className=" pe-2">
                                                    <i className="bi bi-pencil" />
                                                </span>
                                                <span>Edit</span>
                                            </a>
                                            <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                                <span className=" pe-2">
                                                    <i className="bi bi-cloud-download" />
                                                </span>
                                                <span>Download</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </header>
                    {/* Main content */}
                    <main className="py-10 bg-surface-secondary">
                        {/* Container */}
                        <div className="container-xl">
                            <div className="bg-card rounded shadow-sm">
                                <div className="p-5">
                                    <div
                                        className="border border-4 border-dashed rounded d-flex flex-column justify-content-center align-items-center"
                                        style={{ minHeight: 400 }}
                                    >
                                        <div className="h4 font-semibold text-muted opacity-8 ">

                                            <>
                                                <label className="form-label " htmlFor="input_file">
                                                    {/* Choose file */}
                                                </label>
                                                <RecordsForm/>
                                            </>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </>

            </div>
        </Layout>
    )
}

export default AddRecords