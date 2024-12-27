import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Main from './home/main/main';
import LoginPage from './home/LoginForm/LoginPage';
import RegisterPage from './home/RegisterForm/RegisterPage';
import CreateEventPage from './home/CreateEventPage';
import PrivateRoute from './components/PrivateRoute';
import { Header } from './home/header/header';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route 
            path="/create-event" 
            element={
              <PrivateRoute>
                <CreateEventPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
