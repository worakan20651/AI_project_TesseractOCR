import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navBar';
import Banner from '../components/banner';
import AboutDetail from '../components/aboutDetail';
import Footer from '../components/footer';
import { useLocation } from 'react-router-dom';

export default function splashpage() {
  const aboutRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      scrollToRef(aboutRef);
    }
  }, [location]);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <AboutDetail aboutRef={aboutRef} />
      <Footer />
    </div>
  );
}