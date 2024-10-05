import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Appoinment from './pages/Appoinment'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import MyAppoinments from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
export default function App() {
  return (
    <h1 className="mx-4 sm:mx-[10%]">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} /> 
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/my-profile'  element={<MyProfile />}/>
      <Route path='/my-appoinments' element={<MyAppoinments />} />
      <Route path='/appoinment/:docId' element={< Appoinment />} />

       </Routes>

       <Footer />
    </h1>
  )
}