import React, { useContext } from 'react'
import Layout from '../components/layouts/Layout'
import { GlobalContext } from '../store/AppContext'
import Female from '../img/woman.png'
import Masculine from '../img/man.png'


function Profile() {

    const { state: { store, actions } } = useContext(GlobalContext)

    return (

        <Layout includeSidebar>
            <div className="container-fluid">

                <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
<<<<<<< HEAD
                            <div className="col col-lg-9 mb-4 mb-lg-0">
=======
                            <div className="col col-lg-8 mb-4 mb-lg-0">
>>>>>>> 1d1c23e724666569111078d5a8e99da96b964c50
                                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                                    <div className="row g-0">
                                        <div
                                            className="col-md-4 gradient-custom text-center bg "
                                            style={{
                                                borderTopLeftRadius: ".5rem",
                                                borderBottomLeftRadius: ".5rem"
                                            }}
                                        >

                                            {
                                                store?.currentUser && store?.currentUser?.user?.gender !== "Female" ?//Limitar la visualizacion segun el rol
                                                    (
                                                        <>
                                                            {/* Contenido para usuarios con genero diferente a Female */}
                                                            <img
                                                                src={Masculine}
                                                                alt="Avatar"
                                                                className="img-fluid my-5"
                                                                style={{ width: 80 }}
                                                            />

                                                        </>
                                                    ) : (
                                                        <>
                                                            {/* Contenido para usuarios con genero Female */}
                                                            <img
                                                                src={Female}
                                                                alt="Avatar"
                                                                className="img-fluid my-5"
                                                                style={{ width: 80 }}
                                                            />

                                                        </>
                                                    )
                                            }
 
                                            <h5>{store?.currentUser?.user?.first_name} {store?.currentUser?.user?.last_name}</h5>
                                            <p>{store?.currentUser?.user?.speciality}</p>
                                            <i className="far fa-edit mb-5" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-4">
                                                <h6>Information</h6>
                                                <hr className="mt-0 mb-4" />
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>Email</h6>
                                                        <p className="text-muted">{store?.currentUser?.user?.email}</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Phone</h6>
                                                        <p className="text-muted">{store?.currentUser?.user?.phone_number}</p>
                                                    </div>
                                                </div>
                                                <h6>Location</h6>
                                                <hr className="mt-0 mb-4" />
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>City</h6>
                                                        <p className="text-muted">{store?.currentUser?.user?.city}</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Country</h6>
                                                        <p className="text-muted">{store?.currentUser?.user?.country}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <a href="#!">
                                                        <i className="fab fa-facebook-f fa-lg me-3" />
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-twitter fa-lg me-3" />
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-instagram fa-lg" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </Layout>
    )
}

export default Profile