
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MedicalRecords from './pages/MedicalRecords'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
import Profile from './pages/Profile'
import Support from './pages/Support'
import AccountMedical from './pages/AccountMedical'
import AccountPatient from './pages/AccountPatient'
import NotFound from './pages/NotFound'
import ProtectedRoute from './utils/ProtectedRoute'
import injectContext, { GlobalContext } from './store/AppContext'

import { useContext } from 'react'


const App = () => {
  // const { store: { currentUser } } = useContext(GlobalContext);
  
  const { state:{store, actions} } = useContext(GlobalContext);
  const currentUser = store?.currentUser;


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/account-medical' element={<AccountMedical />} />
        <Route path='/account-patient' element={<AccountPatient />} />
        <Route path='/dashboard' element={<ProtectedRoute currentUser={currentUser}><Dashboard /></ProtectedRoute>} />
        <Route path='/medical-records' element={<ProtectedRoute currentUser={currentUser}><MedicalRecords /></ProtectedRoute>} />
        <Route path='/patients' element={<ProtectedRoute currentUser={currentUser}><Patients /></ProtectedRoute>} />
        <Route path='/add-patients' element={<ProtectedRoute currentUser={currentUser}><AddPatient /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute currentUser={currentUser}><Profile /></ProtectedRoute>} />
        <Route path='/support' element={<ProtectedRoute currentUser={currentUser}><Support /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default injectContext(App)
