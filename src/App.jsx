
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MedicalRecords from './pages/MedicalRecords'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
import Profile from './pages/Profile'
import Support from './pages/Support'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/medical-records' element={<MedicalRecords/>} />
        <Route path='/patients' element={<Patients/>}/>
        <Route path='/add-patients' element={<AddPatient/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
