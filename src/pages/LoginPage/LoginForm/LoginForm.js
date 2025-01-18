import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext.js';
import './LoginForm.css'; // Додамо файл CSS для стилів

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // очищаємо помилки перед новим запитом
    try {
      const res = await fetch('http://localhost:8888/eventpool_backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        login(data.user);
        navigate('/');
      } else {
        setErrors({ message: data.error || 'Логін чи пароль не вірний!' });
      }
    } catch (err) {
      setErrors({ message: 'Помилка сервера!' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Увійти</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              required
            />
          </div>
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit" className="btn-grad">Увійти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;