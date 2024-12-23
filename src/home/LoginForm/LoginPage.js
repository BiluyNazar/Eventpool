import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
      console.log('Спроба з\'єднання з:', '/eventpool_backend/login.php');
      
      const response = await fetch('/eventpool_backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Відповідь отримано:', response);

      const data = await response.json();
      console.log('Дані:', data);
      
      if (data.success) {
        // Зберігаємо дані користувача в localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Вхід успішний!');
        navigate('/'); // Перенаправлення на головну сторінку
      } else {
        alert(`Помилка: ${data.message}`);
      }
    } catch (error) {
      console.error('Детальна помилка:', error);
      
      if (error instanceof TypeError) {
        console.log('Помилка мережі. Перевірте, чи запущений сервер');
      }
      
      alert(`Помилка при вході: ${error.message}`);
    }
  };

  return (
    <div className="login-page">
      <h2>Увійти</h2>
      <form onSubmit={handleSubmit} autoComplete="on">
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
        <button type="submit" className="btn-grad">Увійти</button>
      </form>
    </div>
  );
};

export default LoginPage;
