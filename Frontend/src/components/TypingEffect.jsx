import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(false); // ปรับให้ cursor ไม่แสดงเริ่มต้น

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setCursorVisible(true), 5 ); // เปลี่ยนเป็นแสดง cursor หลังจากพิมพ์เสร็จ
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);
   
  return (
    <div>
      <span>{displayedText}</span>
      {cursorVisible && <span className="blink-cursor">|</span>}
    </div>
  );
}

export default TypingEffect;
 