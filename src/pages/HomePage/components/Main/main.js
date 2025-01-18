import React from 'react';
import { Header } from '../Header/header';
import { HeroSection } from '../HeroSection/HeroSection';
import Benefits from '../Benefits/benefits';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <HeroSection />
      <Benefits />
    </div>
  );
};

export default Main;