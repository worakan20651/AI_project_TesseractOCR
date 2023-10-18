import React, { useState, useEffect } from 'react';
import './style/genTextBox.css';

function GenTextBox({ generatedText }) {
  const [displayedText, setDisplayedText] = useState('สร้างข้อความ . . .');

  useEffect(() => {
    if (generatedText.message) {
      setDisplayedText(generatedText.message);
    }
  }, [generatedText]);

  const textBoxStyle = {
    border: '0px solid #000',
    borderRadius: '20px',
    borderColor: 'grey',
    backgroundColor: 'white',
    color: 'grey',
    width: '100%',
    height: '743px',
    maxWidth: '625px',
    maxHeight: '743px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    padding: '15px',
    wordWrap: 'break-word',
  };

  return (
    <div style={textBoxStyle}>
      <div>
        <p >{displayedText}</p>
      </div>
    </div> 
  );
}

export default GenTextBox;

