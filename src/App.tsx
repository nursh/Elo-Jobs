import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/styles/App.css'
import JobListings from './pages/JobListings'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
