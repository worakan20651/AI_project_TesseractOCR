import React from 'react'
import aboutIcon from '../assets/information.png';
import '../index.css'

function aboutText() {
  const iconStyle = {
    marginLeft: '80px',
    marginTop: '50px',
    maxWidth: '40%',
    maxHeight: '40%',
  };

  const imageHearderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
    verticalAlign: 'middle',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    verticalAlign: 'middle',
    marginTop: '50px',
    fontWeight: 'bold',
  };

  const describeStyle = {
    marginLeft: '135px',
    marginRight: '135px',
    marginTop: '10px'
  }

  return (
    <>
      <div style={imageHearderStyle}>
        <img src={aboutIcon} style={iconStyle} alt="" />
        <h1 style={headerStyle}>เกี่ยวกับเรา</h1>
      </div>
      <div>
        <h2 className="custom-font" style={describeStyle}>เว็บแอปพลิเคชันนี้ถูกสร้างขึ้นเพื่อช่วยให้คุณสามารถแปลงข้อความลายมือภาษาไทยที่เขียนอยู่ในกระดาษให้เป็นข้อความ Text สำหรับคอมพิวเตอร์ได้โดยสะดวกและรวดเร็ว เพียงแค่แนบรูปถ่ายลายมือภาษาไทยและกดดำเนินการ ลายมือดังกล่าวจะปรากฎเป็น Text พร้อมใช้งานราวกับเวทมนตร์!  เทคโนโลยี AI นี้ ถูกสร้างขึ้นโดยนักศึกษาที่มีความมุ่งมั่นที่จะนำเสนอเทคโนโลยีที่ทันสมัยและคุณภาพให้กับผู้ใช้ทุกคน ไม่ว่าคุณจะเป็น นักศึกษา อาจารย์ หรือ ผู้ที่สนใจเทคโนโลยี คุณสามารถเพลิดเพลินกับการใช้งานเว็บแอปพลิเคชันนี้ในทุกสถานการณ์ ขอให้สนุกกับการใช้งานเว็บของเรา! </h2>
      </div>
    </>
  )
}

export default aboutText
