import React from 'react'
import { Link } from 'react-router-dom'
import circleYellow from '../assets/circleYellow.png';
import circlePurple1 from '../assets/circlePurple1.png';
import circlePurple2 from '../assets/circlePurple2.png';

function banner() {
  return (
    <div>
        <div style={{
                display:'flex', 
                flexDirection: 'row',
                alignItems:'center', 
                justifyContent:'center',
                backgroundImage: 'url("https://cdn.discordapp.com/attachments/1152885771527786526/1162070003261132821/Frame_1_1.png?ex=653a9906&is=65282406&hm=eee1c07dc2341df74724edc263253961c95a8f3d00218cf8b3553207bc332ca0&")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width:'100%' , 
                height:'676px' , 
                textAlign:'center'}}>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center' , marginBottom:'45px'}}>
                    <img src="/image 27.png" alt="iconLogo" style={{ width: '40px', height: '40px' }} />
                    <div style={{ fontSize: '32px', marginLeft: '14px' }}>GeniText</div>
                </div>
                <div style={{fontSize:'70px' , fontWeight:'500', maxWidth:'700px'}}>เครื่องมือสร้างข้อความช่วยคุณ
                    เขียนได้ดีขึ้นและฉลาดขึ้นได้!
                </div>
                <button style={{
                    marginTop:'105px' , 
                    fontSize:'20px' , 
                    backgroundColor:'white' , 
                    width:'163px' , 
                    height:'41px',
                    borderRadius:'20px' ,
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                        <Link to={'/home'}>เริ่ม</Link>            
                    </button>      
            </div> 
            <div style={{
                position: 'absolute',
                left:'1420px',
                top:'590px'            
            }}>
                {/* <img src={circleYellow}  alt="circleYellow" /> */}
            </div>
            <div style={{
                position: 'absolute',
                left:'1600px',
                top:'173px'            
            }}>
                {/* <img src={circlePurple1}  style={{width:'86px' , height:'85px'}} alt="circlePurple_1" /> */}
            </div>
            <div style={{
                position: 'absolute',
                left:'126px',
                top:'203px'            
            }}>
                {/* <img src={circlePurple2}  style={{width:'60px' , height:'70px'}} alt="circlePurple_2" /> */}
            </div>                
        </div>
        
    </div>
  )
}

export default banner