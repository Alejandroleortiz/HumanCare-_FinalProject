import React from 'react'

function DataPatients() {
    return (
        <>
            <div className="row g-6 mb-6 my-3">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                        Upcoming Appointments
                                    </span>
                                    <span className="h3 font-bold mb-0">215</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                        <i className="bi bi-clock-history" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                        Patients Attended
                                    </span>
                                    <span className="h3 font-bold mb-0">1.400</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-success text-white text-lg rounded-circle">
                                        <i className="bi bi-person-check" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                        Total Patient Count
                                    </span>
                                    <span className="h3 font-bold mb-0">95%</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                        <i className="bi bi-people-fill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataPatients