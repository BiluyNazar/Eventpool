import React from 'react';
import './EventTaskBar.css';
import Logo from '../../../../img/avadefault.jpg'

export const EventTaskBar = () => {
    return(
        <div className='event-taskbar-container'>
            <div className='event-taskbar-header'></div>
            <div className='event-taskbar-content'>
                <div className='event-taskbar-pfp-container'>
                    <div className='event-taskbar-pfp'>
                        <img src={Logo}/>
                    </div>
                </div>
                <div className='event-taskbar-title'>
                    Панель задач
                </div>
                <div className='event-taskbar-progress'>

                </div>
            </div>
        </div>
    )
}

export default EventTaskBar; 