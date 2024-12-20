import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/styles/App.css'
import JobListings from './pages/JobListings'
import JobProfile from './pages/JobProfile'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListings />} />
        <Route path="job/:jobId" element={<JobProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
