import React from 'react';
import './EventSuggestions.css';


export const EventSuggestions = () => {
    return (
        <div className='event-suggestions-container'>
           <div className='event-suggestions-title'>
                Топові <br /> пропозиції
           </div>
           <div className='event-suggestions-categories'>
                <div className='event-suggestions-btn'>Відпочинок</div>
                <div className='event-suggestions-btn'>Реабілітація</div>
           </div>
           <div className='event-suggestions-cards-container'>
                <div className='event-suggestions-card'>
                    <div className='event-suggestions-card-title'>
                        Умань та Софіївський парк
                    </div>
                    <div className='event-suggestions-card-text'>
                        Мальовнича Умань та її перлина – Софіївський парк – ідеальне місце для вікенду, яке поєднує красу природи з історичним духом. Тут можна знайти безліч романтичних куточків, мальовничих озер, фонтанів, водоспадів та статуй, що ніби переносять у класичну античну епоху. 
                    </div>
                    <div className='event-suggestions-card-btn'>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
                <div className='event-suggestions-card'>
                    <div className='event-suggestions-card-title'>
                        Умань та Софіївський парк
                    </div>
                    <div className='event-suggestions-card-text'>
                        Мальовнича Умань та її перлина – Соф безліч романтичних куточків, мальовничих озер, фонтанів, водоспадів та статуй, що ніби переносять у класичну античну епоху. 
                    </div>
                    <div className='event-suggestions-card-btn'>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
                <div className='event-suggestions-card'>
                    <div className='event-suggestions-card-title'>
                        Умань та Софіївський парк
                    </div>
                    <div className='event-suggestions-card-text'>
                        Мальовнича Умань та її перлина – Соф безліч романтичних куточків, мальовничих озер, фонтанів, водоспадів та статуй, що ніби переносять у класичну античну епоху. 
                    </div>
                    <div className='event-suggestions-card-btn'>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
                <div className='event-suggestions-btn'>Інші варіанти</div>
           </div>
        </div>
    );
}