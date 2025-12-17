import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import CareerPage from './pages/CareerPage'
import './App.css'
import NoPageAvailable from './pages/NoPageAvailable'
import Header from './components/Header'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="*" element={<NoPageAvailable/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

