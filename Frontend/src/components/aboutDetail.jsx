import React, { useEffect, useRef } from 'react';
import AboutText from './aboutText';
import CareerText from './careerText';
import ContactText from './contactText';
import { useLocation } from 'react-router-dom';

function AboutDetail({ aboutRef }) {
  // ...

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("https://cdn.discordapp.com/attachments/1152885771527786526/1162090907718385834/Frame_3_1.png?ex=653aac7f&is=6528377f&hm=4bb00e199bc4d441bfd07e203d0f440a20678296b4e0afc8faf61eb0bbb65292&")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const squareStyle = {
    position: 'relative',
    zindex: '1',
    width: '100%',
    height: '100%',
    maxWidth: '877px',
    maxHeightheight: '1260px',
    border: '2px solid white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: '10px',
    marginTop: '40px',
    marginBottom: '60px',
    // marginLeft: '400px',
    // marginRight: '100px',
    
  };

  const firstLineStyle = {
    width: '70%',
    borderBottom: '1px solid #6552AD',
    marginBottom: '5px',
    marginLeft: '135px',
    marginRight: '135px',
    alignSelf: 'center',
    marginTop: '130px'
  };

  const secondLineStyle = {
    width: '70%',
    borderBottom: '1px solid #6552AD',
    marginBottom: '5px',
    marginLeft: '135px',
    marginRight: '135px',
    alignSelf: 'center',
  };

  const iconStyle = {
    marginLeft: '80px',
    marginTop: '50px',
    maxWidth: '40%',
    maxHeight: '40%',
  };

  const imageHearderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    verticalAlign: 'middle',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px',
    verticalAlign: 'middle',
    marginTop: '50px',
    fontWeight: 'bold',
  };

  const describeStyle = {
    marginLeft: '135px',
    marginTop: '10px'
  }

  const bookPenStyle = {
    // position: 'absolute',
    // zindex: '99999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
   const PenStyle = {
    position: 'relative',
    zindex: '99999',
    top: '170px',
    right: '130px'
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  };

  const setSizeBlueBook = {
    marginLeft: '15px',
    marginTop: '50px',
    maxWidth: '30%',
    maxHeight: '30%',
  };

  const setSizeRedBook = {
    marginRight: '30px',
    marginLeft: '30px',
    marginTop: '50px',
    maxWidth: '70%',
    maxHeight: '70%',
  };

  const setSizeYellowPen = {
    marginRight: '30px',
    marginLeft: '30px',
    marginTop: '600px',
    maxWidth: '70%',
    maxHeight: '70%',
  };

  return (
    <div style={containerStyle}>
      {/* <img src={blueBook} style={setSizeBlueBook} alt="" /> */}
      <div style={squareStyle}>

        <div ref={aboutRef}><AboutText /></div>

        <div style={firstLineStyle}></div>
        <div style={secondLineStyle}></div>

        <CareerText />

        <div style={firstLineStyle}></div>
        <div style={secondLineStyle}></div>

        <ContactText />
      </div>
      <div style={bookPenStyle}>
        {/* <img src={redBook} style={setSizeRedBook} alt="" /> */}
        <div style={PenStyle}>
            {/* <img src={yellowPen} style={setSizeYellowPen} alt="" /> */}
        </div>

      </div>
    </div>
  );
}
export default AboutDetail