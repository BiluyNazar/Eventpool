import React from 'react';
import { Header } from '../HomePage/components/Header/header';
import EventHeader from './components/EventHeader/EventHeader';
import EventHeroSection from './components/EventHeroSection/EventHeroSection';
import EventParticipants from './components/EventParticipants/EventParticipants';
import { EventSuggestions } from './components/EventSuggestions/EventSuggestions';
import EventTasks from './components/EventTask/EventTask';
import EventTaskBar from './components/EventTaskBar/EventTaskBar';
import "./EventPage.css"

const EventPage = () => {
  return (
    <>
      <Header />
      <div className="event-page-container">
        <main className="event-page-main-content">
          <EventHeader />
          <EventHeroSection/>
            <div className='event-page-workzone'>
                <EventParticipants/>
                <div className='event-page-taskbar-container'>
                <EventTaskBar/>
                <EventTasks/>
                </div>
            </div> 
        </main>
        <EventSuggestions />
      </div>
    </>
  );
};

export default EventPage;
