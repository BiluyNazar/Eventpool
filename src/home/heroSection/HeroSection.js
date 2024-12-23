import './HeroSection.css'


export const HeroSection = () => {
    return (
        <div className="hero-section-wrapper">
            <div className="hero-section-container d-flex flex-column justify-content-center">
                <div className='hero-section-overlay'></div>
                <div className='hero-section-content d-flex flex-column'>
                    <div className="hero-section-title">
                        EVENT POOL
                    </div>
                    <div className="hero-section-subtitle">
                        Інноваційна платформа для управління туристичними подіями. Простий інструмент для <br/> 
                        організації групових подорожей. Він полегшує такі питання як планування, збір коштів, а <br/> 
                        також розподіляє завдання між усіма учасниками. 
                    </div>
                </div>
            </div>
            <div className='hero-section-footer d-flex justify-content-center align-items-center'>
                <div className='hero-section-contacts'>
                    <i class="fa-solid fa-phone"></i>
                    <div className='hero-section-contacts-text'>
                        Зв’яжіться з нами <br />...
                    </div>
                </div>
                <div className='hero-section-contacts'>
                   <i class="fa-regular fa-envelope"></i>
                    <div className='hero-section-contacts-text'>
                        Напишіть нам <br />...
                    </div>
                </div>
                <div className='hero-section-contacts'>
                    <i class="fa-solid fa-location-dot"></i>
                    <div className='hero-section-contacts-text'>
                        Наша адреса <br />...
                    </div>
                </div>
            </div>
        </div>
    );
}