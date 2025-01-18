import React from 'react';
import './EventParticipants.css';

const EventParticipants = () => {
  return (
    <div className='event-participants'>
      <h2 className="event-participants-title">усі учасники</h2>
      <div className="event-participants-list">
        <div className='event-participants-card'>
          <div className='event-participants-pfp'> 
            <i class="fa-solid fa-user"></i>
          </div>
          <div className='event-participants-info' >
            <div className='event-participants-role'>
                організатор
            </div>
            <div className='event-participants-name'>
                Прізвище ім’я
            </div>
          </div>
        </div>
        <div className='event-participants-card'>
          <div className='event-participants-pfp'> 
            <i class="fa-solid fa-user"></i>
          </div>
          <div className='event-participants-info' >
            <div className='event-participants-role'>
                організатор
            </div>
            <div className='event-participants-name'>
                Прізвище ім’я
            </div>
          </div>
        </div>
        <div className='event-participants-card'>
          <div className='event-participants-pfp'> 
            <i class="fa-solid fa-user"></i>
          </div>
          <div className='event-participants-info' >
            <div className='event-participants-role'>
                організатор
            </div>
            <div className='event-participants-name'>
                Прізвище ім’я
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventParticipants; 