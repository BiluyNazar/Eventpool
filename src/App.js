import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Benefits from './home/benefits/benefits';
import { Header } from './home/header/header';
import { HeroSection } from './home/heroSection/HeroSection';
import LoginPage from './home/LoginForm/LoginPage';
import RegisterPage from './home/RegisterForm/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Benefits />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<div>Сторінка подій</div>} />
          <Route path="/help" element={<div>Сторінка довідки</div>} />
          <Route path="/support" element={<div>Сторінка допомоги</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
