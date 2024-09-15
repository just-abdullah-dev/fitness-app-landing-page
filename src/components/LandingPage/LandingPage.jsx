import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Features from './Features/Features';
import WatchFeature from './OnSmartWatch/WatchFeature';
import Footer from './Footer/Footer';

export default function LandingPage() {
  return (
    <div className=' max-w-7xl mx-auto '>
        <HeroSection />
        <Features />
        <WatchFeature />
        <Footer />
    </div>
  )
}
