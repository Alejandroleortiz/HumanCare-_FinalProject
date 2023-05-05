import React from 'react'
import { Navigate } from 'react-router-dom'

//Reedireccionar al usuario si no esta autenticado
const ProtectedRoute = ({ currentUser, children }) => { 

    if (!currentUser) {
        return <Navigate to='/' replace />
    }
    return children
}

export default ProtectedRoute