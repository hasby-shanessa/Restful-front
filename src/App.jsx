import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Landing from './views/home/Landing';
import Auth from './views/auth/Auth';
import Layout from './layout/Layout';
import Dashboard from './views/dashboard/Dashboard';
import Profile from './views/profile/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};


export default App;
