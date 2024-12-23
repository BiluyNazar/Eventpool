import React from 'react';
import './benefits.css';

const cardsData = [
  { id: 1, title: 'Чому саме ми?', description: 'Простота використання Конфіденційність Прозорість', image: '/images/benefit-1.png' },
  { id: 2, title: 'Створити подію', description: 'Розпочніть створення вашого ідеального заходу зараз!', image: 'images/benefit-2.png' },
  { id: 3, title: 'Використання', description: 'Ознайомтесь із ключовими функціями сайту', image: 'images/benefit-3.png' },
  { id: 4, title: 'Наш Телеграм', description: 'Слідкуйте за новинами та отримуйте актуальну інформацію у нашому Телеграмі.', image: 'images/benefit-4.png' },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      {cardsData.map((card) => (
        <div key={card.id} className="benefit-card d-flex flex-column align-items-center ">
          <img src={card.image} alt={card.title} className="benefit-card-image" />
          <h3 className="benefit-card-title">{card.title}</h3>
          <p className="benefit-card-description">{card.description}</p>
          <button className='benefit-card-btn' >Більше</button>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
