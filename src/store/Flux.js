const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            API_URL: 'http://127.0.0.1:9000',
            currentUser: null,
            error: null,

        },
        actions: {

            generico: null,

            register: async (e, navigate, userRole) => { 
                //signup
                e.preventDefault()
                
                try {
                    const { API_URL } = getStore()
                    const { first_name, last_name, gender, email, phone_number, speciality, city,
                        country, password, profile_picture, role } = e.target;
                    const credentials = {
                        first_name: first_name?.value,
                        last_name: last_name?.value,
                        gender: gender?.value,
                        email: email?.value,
                        phone_number: phone_number?.value,
                        speciality: speciality?.value,
                        city: city?.value,
                        country: country?.value,
                        password: password?.value,
                        profile_picture: profile_picture?.value,
                        role: userRole // declaro el parametro
                    }



                    const options = {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    const response = await fetch(`${API_URL}/api/signup`, options)
                    const data = await response.json()

                    if (data.msg) {
                        setStore({
                            currentUser: null,
                            error: data
                        })

                    } else {
                        setStore({
                            currentUser: data,
                            error: null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        navigate('/dashboard')
                    }

                } catch (error) {
                    console.log(error.message);

                }
            },


            login: async (e, navigate) => {
                e.preventDefault()
                try {
                    const { API_URL } = getStore()
                    const { email, password } = e.target;
                    const credentials = { email: email.value, password: password.value }

                    const options = {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    const response = await fetch(`${API_URL}/api/signin`, options)
                    const data = await response.json()

                    if (data.msg) {
                        setStore({
                            currentUser: null,
                            error: data
                        })

                    } else {
                        setStore({
                            currentUser: data,
                            error: null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        navigate('/dashboard')
                    }

                } catch (error) {
                    console.log(error.message);

                }
            },

            logout: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: null
                    })
                    sessionStorage.removeItem('currentUser')
                }
            },

            checkCurrentUser: () => { //mantener la información del currentUser
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },

            addPatient: async (e, navigate) => { 
                //add-patient form
                e.preventDefault()
                
                try {
                    const { API_URL } = getStore()
                    const { full_name,  } = e.target;
                    const credentials = {
                        full_name: full_name?.value,
                    }



                    const options = {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    const response = await fetch(`${API_URL}/api/patient`, options)
                    const data = await response.json()

                    if (data.msg) {
                        setStore({
                            currentUser: null,
                            error: data
                        })

                    } else {
                        setStore({
                            currentUser: data,
                            error: null
                        })
                        sessionStorage.setItem('currentUser', JSON.stringify(data))
                        navigate('/patients')
                    }

                } catch (error) {
                    console.log(error.message);

                }
            },

        }
    }
}

export default getState;