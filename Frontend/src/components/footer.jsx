import React from 'react';
import GeniTextLogo from '../assets/GeniTextLogo.png'

function Footer() {
  const footerStyle = {
    backgroundColor: '#fff', // แก้ไขสีพื้นหลังตามที่คุณต้องการ
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
    height: '120px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh', // ทำให้คอนเทนเนอร์มีความสูงเท่ากับ viewport

  };

  return (
    <div style={containerStyle}>
      <div style={{ flex: 1 }}>
        {/* ส่วนเนื้อหาของเว็บไซต์อยู่ในส่วนนี้ */}
        {/* คุณสามารถนำข้อมูลมาแสดงในส่วนนี้ */}
      </div>
      <footer style={footerStyle}>
        {/* <p>&copy; 2023 Your Company. All rights reserved.</p> */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px', marginTop: '10px' }}>
          <img src={GeniTextLogo} alt="GeniText Logo" style={{ marginRight: '10px' }} />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">GeniText</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px', marginTop: '10px' }}>
          <p> สะดวก ใช้งานง่าย แค่แนบรูปภาพ</p>
        </div>

      </footer>
    </div>
  );
}

export default Footer;