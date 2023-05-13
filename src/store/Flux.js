const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            API_URL: 'http://127.0.0.1:9000',
            currentUser: null,
            error: null,
            currentPatient: null,
            currentRecords: null,

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

                const store = getStore();

                try {
                    const { API_URL } = getStore()

                    const { full_name, age, identity_card, adress, phone_number,
                        reason_for_consultation, current_illness, criminal_record,
                        family_history, surgical_history,
                        physical_examination, diagnosis, treatment, observations } = e.target;

                    const credentials = {
                        // user_id: store.currentUser?.id, // Agregar el id del usuario actual aquí
                        full_name: full_name?.value,
                        age: age?.value,
                        identity_card: identity_card?.value,
                        adress: adress?.value,
                        phone_number: phone_number?.value,
                        reason_for_consultation: reason_for_consultation?.value,
                        current_illness: current_illness?.value,
                        criminal_record: criminal_record?.value,
                        family_history: family_history?.value,
                        surgical_history: surgical_history?.value,
                        physical_examination: physical_examination?.value,
                        diagnosis: diagnosis?.value,
                        treatment: treatment?.value,
                        observations: observations?.value,
                    }

                    const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                    const options = {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'

                        }
                    }

                    const response = await fetch(`${API_URL}/api/patient`, options)
                    const data = await response.json()

                    if (data.msg) {
                        setStore({
                            currentPatient: null,
                            error: data
                        })

                    } else {
                        setStore({
                            currentPatient: data,
                            error: null
                        })
                        sessionStorage.setItem('currentPatient', JSON.stringify(data))
                        navigate('/patients')
                    }

                } catch (error) {
                    console.log(error.message);

                }
            },

            checkCurrentPatients: () => { //mantener la información del currentPatient
                if (sessionStorage.getItem('currentPatient')) {
                    setStore({
                        currentPatient: JSON.parse(sessionStorage.getItem('currentPatient'))
                    })
                }
            },

            getPatients: async () => { // Obtener pacientes del usario

                const store = getStore();

                const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                const options = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                };

                try {
                    const { API_URL } = getStore()
                    const response = await fetch(`${API_URL}/api/patient`, options);
                    const data = await response.json();

                    if (response.ok) {
                        setStore({
                            currentPatient: data,
                        });
                    } else {
                        console.error('Error getting patients:', data);
                    }
                } catch (error) {
                    console.error('Error getting patients:', error);
                }
            },

            deletePatient: async (id) => {
                const store = getStore();

                console.log("delete", id);
                try {
                    const { API_URL, currentPatient } = getStore()


                    const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                    const options = {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }

                    const response = await fetch(`${API_URL}/api/patient/${id}`, options)
                    const data = await response.json()

                    if (data.msg == "Patient deleted") {

                        const updatedPatient = store.currentPatient.filter(patient => patient.id !== id);  // filtrando los pacientes que no fueron eliminados;  // 

                        setStore({
                            currentPatient: updatedPatient  // actualizando los pacientes
                        });
                        console.log("Deleted");
                    }

                } catch (error) {
                    console.log(error.message);
                }
            },

            //-----------------------------------------------------Actions Files -----------------------------------------------//

            uploadFile: async (e, navigate) => {
                //add-patient form
                e.preventDefault()

                const store = getStore();

                try {
                    const { API_URL } = getStore()

                    const { file, filename } = e.target;

                    const formData = new FormData();
                    // formData.append("user_id", store.currentUser?.id); // Agregar el id del usuario actual aquí
                    formData.append("file", file?.files[0]);
                    formData.append("filename", filename?.value);

                    const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                    const options = {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }

                    const response = await fetch(`${API_URL}/api/medical-file`, options)
                    const data = await response.json()

                    if (data.msg) {
                        setStore({
                            currentRecords: null,
                            error: data
                        })

                    } else {
                        setStore({
                            currentRecords: data,
                            error: null
                        })
                        sessionStorage.setItem('currentRecords', JSON.stringify(data))
                        navigate('/medical-records')
                    }

                } catch (error) {
                    console.log(error.message);

                }
            },

            checkUploadFile: () => { //mantener la información del currentRecords
                if (sessionStorage.getItem('currentRecords')) {
                    setStore({
                        currentRecords: JSON.parse(sessionStorage.getItem('currentRecords'))
                    })
                }
            },

            getFiles: async () => {
                const store = getStore();

                const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                const options = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                };

                try {
                    const { API_URL } = getStore()
                    const response = await fetch(`${API_URL}/api/medical-file`, options);
                    const data = await response.json();

                    if (response.ok) {
                        setStore({
                            currentRecords: data,
                        });
                    } else {
                        console.error('Error getting medical files:', data);
                    }
                } catch (error) {
                    console.error('Error getting medical files:', error);
                }
            },

            deleteMedicalFile: async (id) => {
                const store = getStore();
                // const {getFiles} = getActions();

                console.log("delete", id);
                try {
                    const { API_URL, currentRecords } = getStore()


                    const token = store.currentUser?.access_token; // Obtén el token del usuario actual

                    const options = {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }

                    const response = await fetch(`${API_URL}/api/medical-file/${id}`, options)
                    const data = await response.json()

                    if (data.msg == "File deleted") {
                        // getFiles();

                        const updatedRecords = store.currentRecords.filter(record => record.id !== id);  // filtrando los registros que no fueron eliminados;  // filtrando los registros que no fueron eliminados

                        setStore({
                            currentRecords: updatedRecords  // actualizando los registros
                        });
                        console.log("Deleted");
                    }



                } catch (error) {
                    console.log(error.message);
                }
            },

        }
    }
}

export default getState;