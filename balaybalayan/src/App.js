import React from 'react';

import { useContext } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import LoginUser from './components/login/LoginUser';
import SignupDormer from './components/signup/SignupDormer';
import SignupDormManager from './components/signup/SignupManager';
import DormManager from './components/dashboards/DormManager/DormManager';
import Dormers from './components/dashboards/Dormer/Dormers';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainSignup from './components/signup/MainSignup';
import BalayGumamela from './components/uniDormInfo/BalayGumamela';
import ExplorePage from './components/ExplorePage'; // Correct file path
import DormitoryPage from './components/uniDormInfo/DormitoryPage';
import Rooms from './components/dashboards/DormManager/Rooms';
import SuperAdmin from './components/dashboards/Admin/SuperAdmin';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<MainPage />} />
            <Route path="/login/dormer" element={<LoginUser />} />
            <Route path="/login/manager" element={<LoginUser />} />
            <Route path="/signup" element={<MainSignup />} />
            <Route path="/signup/dormer" element={<SignupDormer />} />
            <Route path="/signup/manager" element={<SignupDormManager />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/dashboards/DormManager/rooms" element={<Rooms />} />

            {/* University Dorms */}
            <Route path="/university/balaygumamela" element={<BalayGumamela />} />

            {/* Dormitory Page (Dynamic) */}
            <Route path="/dormitories/:id" element={<DormitoryPage />} />
            
           
            {/* Protected Routes */}
            <Route
              path="/dorm-manager"
              element={
                <ProtectedRoute allowedRoles={['manager']}>
                  <DormManager />
                </ProtectedRoute>
              }
            />
        
            <Route
              path="/dormers"
              element={
                <ProtectedRoute allowedRoles={['dormer']}>
                  <Dormers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <SuperAdmin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />    
      </AuthProvider> 
  );
}



export default App;
