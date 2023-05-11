import React, { useContext } from 'react'
import { GlobalContext } from '../../store/AppContext'

function DataRecords() {
    const {state: {store, actions} } = useContext(GlobalContext)
    
    return (
        <>
            <div className="row g-6 mb-6 my-3">
                {/* <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                        Available Medical Records
                                    </span>
                                    <span className="h3 font-bold mb-0">0</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-success text-white text-lg rounded-circle">
                                        <i className="bi bi-file-text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                        Total Count of Medical Records
                                    </span>
                                    <span className="h3 font-bold mb-0">{store?.currentRecords?.length}</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                        <i className="bi bi-journals" />
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

export default DataRecords