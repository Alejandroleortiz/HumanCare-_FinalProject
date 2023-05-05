const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            API_URL: 'http://127.0.0.1:9000',
            currentUser: null,
            error: null
        },
        actions: {
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
                        navigate('/')
                    } else {
                        setStore({
                            currentUser: data,
                            error: null
                        })
                        navigate('/dashboard')
                        console.log(data);
                    }

                } catch (error) {
                    console.log(error.message);

                }
            }


        }
    }
}

export default getState;