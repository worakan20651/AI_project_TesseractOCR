import React from 'react'
import contactIcon from '../assets/contact.png';

function contactText() {
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
                <img src={contactIcon} style={iconStyle} alt="" />
                <h1 style={headerStyle}>ช่องทางติดต่อ</h1>
            </div>
            <div>
                <h2 style={describeStyle}> หากคุณต้องการติดต่อเราหรือมีคำถามเกี่ยวกับเว็บแอปพลิเคชันนี้ โปรดใช้ช่องทางติดต่อด้านล่าง</h2>
                <br />
                <h2 style={describeStyle}> อีเมล: your@email.com  </h2>
                <h2 style={describeStyle}> โทร: 123-456-7890 </h2>
                <br />
                <br />
            </div>
        </>
    )
}

export default contactText