import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/styles/App.css'
import JobListings from './pages/JobListings'
import JobProfile from './pages/JobProfile'
import { UserProfile } from './pages/UserProfile'
import MainLayout from './pages/MainLayout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<JobListings />} />
          <Route path="job/:jobId" element={<JobProfile />} />
          <Route path="user/:userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
