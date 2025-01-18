import React from 'react';
import './EventTask.css';

const EventComments = () => {
  return (
    <div className='event-task-card-container'>
        <div className='event-task-card'>
            <div className='event-task-card-header'>
              <div className='event-title-btn-approve'>
                  <i class="fa-solid fa-check"></i>
              </div>
              <div className='event-task-card-title'>
                  Завдання
              </div>
            </div>
            <div className='event-task-card-main'>
                <div className='event-task-card-executor'> 
                  <i class="fa-solid fa-user"></i>
                  Обрати виконавця
                </div>
                <div className='event-task-container'>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                </div>
            </div>
        </div>
        <div className='event-task-card'>
            <div className='event-task-card-header'>
              <div className='event-title-btn-approve'>
                  <i class="fa-solid fa-check"></i>
              </div>
              <div className='event-task-card-title'>
                  Завдання
              </div>
            </div>
            <div className='event-task-card-main'>
                <div className='event-task-card-executor'> 
                  <i class="fa-solid fa-user"></i>
                  Обрати виконавця
                </div>
                <div className='event-task-container'>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                    <div className='event-task'>
                        <i class="fa-solid fa-plus"></i>
                        Додати завдання
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EventComments; 