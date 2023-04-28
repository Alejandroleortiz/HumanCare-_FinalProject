import React from 'react'
import Layout from '../components/layouts/Layout'

function Patients() {
    return (
        <>
            <Layout includeSidebar> 
                <div className="container-fluid my-5">
                    <div className="row g-6 mb-6">
                    </div>
                    <div className="card mb-7">
                        <div className="card-header">
                            <h5 className="mb-0">Applications</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Company</th>
                                        <th scope="col">Offer</th>
                                        <th scope="col">Meeting</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Robert Fox
                                            </a>
                                        </td>
                                        <td>Feb 15, 2021</td>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                                                className="avatar avatar-xs rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Dribbble
                                            </a>
                                        </td>
                                        <td>$3.500</td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-success" />
                                                Scheduled
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Darlene Robertson
                                            </a>
                                        </td>
                                        <td>Apr 15, 2021</td>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                                                className="avatar avatar-xs rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Netguru
                                            </a>
                                        </td>
                                        <td>$2.750</td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-warning" />
                                                Postponed
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Theresa Webb
                                            </a>
                                        </td>
                                        <td>Mar 20, 2021</td>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                                                className="avatar avatar-xs rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Figma
                                            </a>
                                        </td>
                                        <td>$4.200</td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-success" />
                                                Scheduled
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Kristin Watson
                                            </a>
                                        </td>
                                        <td>Feb 15, 2021</td>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                                                className="avatar avatar-xs rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Mailchimp
                                            </a>
                                        </td>
                                        <td>$3.500</td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-dark" />
                                                Not discussed
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Patient */}
                                    <tr>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                className="avatar avatar-sm rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Cody Fisher
                                            </a>
                                        </td>
                                        <td>Apr 10, 2021</td>
                                        <td>
                                            <img
                                                alt="..."
                                                src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                                                className="avatar avatar-xs rounded-circle me-2"
                                            />
                                            <a className="text-heading font-semibold" href="#">
                                                Webpixels
                                            </a>
                                        </td>
                                        <td>$1.500</td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-danger" />
                                                Canceled
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                                            >
                                                <i className="bi bi-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer border-0 py-5">
                            <span className="text-muted text-sm">
                                Showing 10 items out of 250 results found
                            </span>
                        </div>
                    </div>
                </div>
            </Layout>
            {/* Card stats */}

        </>
    )
}

export default Patients