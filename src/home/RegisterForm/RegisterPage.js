import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterPage.css';  // Ваш власний файл CSS

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // очищаємо помилки перед новим запитом
    try {
      const res = await fetch('http://localhost:8888/eventpool_backend/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert('Реєстрація успішна!');
        navigate('/login');
      } else {
        setErrors({ message: data.error || 'Помилка реєстрації!' });
      }
    } catch (err) {
      setErrors({ message: 'Помилка сервера!' });
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Реєстрація</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Ім'я</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.message ? "error form-control" : "form-control"}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.message ? "error form-control" : "form-control"}
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
              className={errors.message ? "error form-control" : "form-control"}
              required
            />
          </div>
          {errors.message && <p className="error-message">{errors.message}</p>}
          <button type="submit" className="btn-grad">Зареєструватися</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
