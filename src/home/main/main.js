import React from 'react';
import { Header } from '../header/header';
import { HeroSection } from '../heroSection/HeroSection';
import Benefits from '../benefits/benefits';

const Main = () => {
  return (
    <div className="main">
      <HeroSection />
      <Benefits />
    </div>
  );
};

export default Main;