import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';
import AttendanceCamera from './components/AttendanceCamera';
import Reports from './components/Reports';
import Navbar from './components/Navbar';
import PresenseeSiswa from './components/PresenseeSiswa';
import PresenseeGuru from './components/PresenseeGuru';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/presenseeSiswa" element={<PresenseeSiswa />} />
            <Route path="/presenseeGuru" element={<PresenseeGuru />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <div>
                    <Navbar />
                    <Home />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/students"
              element={
                <PrivateRoute>
                  <div>
                    <Navbar />
                    <StudentList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/teachers"
              element={
                <PrivateRoute>
                  <div>
                    <Navbar />
                    <TeacherList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/attendance"
              element={
                <PrivateRoute>
                  <div>
                    <Navbar />
                    <AttendanceCamera />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <PrivateRoute>
                  <div>
                    <Navbar />
                    <Reports />
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
