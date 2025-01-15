// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './assets/styles/App.css';
import './assets/styles/Chat.css';
import JobListings from './pages/JobListings';
import JobProfile from './pages/JobProfile';
import { UserProfile } from './pages/UserProfile';
import MainLayout from './pages/MainLayout';
import UserProfiles from './pages/UserProfiles';
import TalentChat from './pages/TalentChat';
// import PasswordPage from './pages/PasswordPage';

function App() {
  // const [accessGranted, setAccessGranted] = useState(false);

  return (
      <div className="App">
        {/*{accessGranted ? (*/}
            <BrowserRouter>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route index element={<JobListings />} />
                  <Route path="users" element={<UserProfiles />} />
                  <Route path="jobs/:jobId" element={<JobProfile />} />
                  <Route path="users/:userId" element={<UserProfile />} />
                  <Route path="chat" element={<TalentChat />} />
                </Route>
              </Routes>
            </BrowserRouter>
        {/*) : (*/}
        {/*    <PasswordPage onAccessGranted={() => setAccessGranted(true)} />*/}
        {/*)}*/}
      </div>
  );
}

export default App;