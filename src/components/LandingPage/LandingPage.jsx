import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import WatchSection from './OnSmartWatch/WatchSection';

export default function LandingPage() {
  return (
    <div className=' max-w-7xl mx-auto '>
        <HeroSection />
        <Features />
        <WatchSection />
        <Footer />
    </div>
  )
}
