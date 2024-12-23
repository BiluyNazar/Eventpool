import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Відправляємо дані:', formData);
      
      const res = await fetch('http://localhost:8888/eventpool_backend/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Відповідь отримана:', res);
      
      const data = await res.json();
      console.log('Дані:', data);
      
      if (data.success) {
        alert('Реєстрація успішна!');
        navigate('/login');
      } else {
        alert(data.error || 'Помилка реєстрації!');
      }
    } catch (err) {
      console.error('Детальна помилка:', err);
      alert('Помилка сервера!');
    }
  };

  return (
    <div className="register-page">
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div>
          <label htmlFor="name">Ім'я</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Електронна пошта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-grad">Зареєструватися</button>
      </form>
    </div>
  );
};

export default RegisterPage;
