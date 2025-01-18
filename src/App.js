import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Main from './pages/HomePage/components/Main/main';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import EventPage from './pages/EventPage/EventPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route 
            path="/create-event" 
            element={
              <PrivateRoute>
                <EventPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
