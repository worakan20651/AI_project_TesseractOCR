import React from 'react'
import careerIcon from '../assets/career.png';

function careerText() {
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
        marginRight: '135px',
        marginTop: '10px'
      };

      
    return (
        <>
            <div style={imageHearderStyle}>
                <img src={careerIcon} style={iconStyle} alt="" />
                <h1 style={headerStyle}>โปรเจ็คของเรา</h1>
            </div>
            <div>
                <h2 style={describeStyle}>เว็บแอปพลิเคชันนี้ถูกสร้างขึ้นโดยทีมของนักศึกษาที่มุ่งมั่นในการเรียนรู้และพัฒนาทักษะในด้านเทคโนโลยี โปรเจคนี้เป็นส่วนหนึ่งของวิชา Ai ของเราและเป็นผลงานที่เราสร้างขึ้นเพื่อตอบสนองความต้องการในการแปลงข้อมูลจากภาพถ่ายกระดาษที่เขียนด้วยภาษาไทยเป็นข้อความสำหรับคอมพิวเตอร์อย่างมีประสิทธิภาพ ขอบคุณที่ร่วมสนับสนุนเรา! </h2>
            </div>
        </>
    )
}

export default careerText