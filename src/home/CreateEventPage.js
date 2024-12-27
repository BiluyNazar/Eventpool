import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Додати відправку на сервер
    console.log('Створення події:', eventData);
  };

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="create-event-page">
      <h2>Створити нову подію</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Назва:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Опис:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Дата:</label>
          <input
            type="datetime-local"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Місце проведення:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Створити подію</button>
      </form>
    </div>
  );
};

export default CreateEventPage; 