import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Enroll from './pages/Enroll'
import Dashboard from './pages/Dashboard'
import TriggerAlert from './pages/TriggerAlert'
import PayoutConfirm from './pages/PayoutConfirm'
import Defense from './pages/Defense'
import Architecture from './pages/Architecture'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trigger" element={<TriggerAlert />} />
        <Route path="/payout" element={<PayoutConfirm />} />
        <Route path="/defense" element={<Defense />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
