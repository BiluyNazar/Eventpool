import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">Головна</a>
        </li>
        <li className="nav__item">
          <a href="#benefits" className="nav__link">Переваги</a>
        </li>
        <li className="nav__item">
          {user ? (
            <Link to="/create-event" className="nav__link">Моя подія</Link>
          ) : (
            <Link to="/register" className="nav__link">Зареєструватися</Link>
          )}
        </li>
        <li className="nav__item">
          {user ? (
            <Link to="/" onClick={logout} className="nav__link">Вийти</Link>
          ) : (
            <Link to="/login" className="nav__link">Увійти</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 