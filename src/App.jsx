
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
import AppContext from './store/AppContext'

const App = () => {


  return (

    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/account-medical' element={<AccountMedical />} />
          <Route path='/account-patient' element={<AccountPatient />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/medical-records' element={<MedicalRecords />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/add-patients' element={<AddPatient />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
    
  )
}

export default App
