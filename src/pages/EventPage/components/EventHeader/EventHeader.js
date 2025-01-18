import React from 'react';
import './EventHeader.css';
import Logo from "../../../../img/logo.png";

const EventHeader = () => {
  return (
    <div className="event-header">
        <div className='event-title'>
            <h1>Поїздка в Карпати</h1>
        </div>
        <div className='event-title-btn-container'>
          <div className='event-title-btn-approve'>
            <i class="fa-solid fa-check"></i>
          </div>
          <div className='event-title-btn-edit'>
            <i class="fa-solid fa-pen "></i>
          </div>
          <div className='event-title-btn-delete'>
            <i class="fa-solid fa-trash-can "></i>
          </div>
        </div>
    </div>
  );
};

export default EventHeader; 