import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

function uploadFile({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length === 1) {
      const selectedFile = selectedFiles[0];
      if (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') {
        setSelectedFile(selectedFile);
        setFile(URL.createObjectURL(selectedFile));
      } else {
        alert('โปรดเลือกไฟล์รูปภาพเฉพาะประเภท PNG หรือ JPG');
      }
    } else {
      alert('โปรดเลือกเฉพาะไฟล์เดียวเท่านั้น');
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      axios.post('http://localhost:5000/upload', formData)
        .then(response => {
          console.log('File uploaded successfully:', response.data);
          if (response.data !== null || response.data !== undefined) {
            onFileUpload(response.data);
            console.log(response.data)
          }
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif' ,maxWidth: '600px',
    width: '100%'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <p style={{ fontSize: '24px' }}>ใส่รูปภาพ</p>
        <p style={{ fontSize: '18px' }}>ใส่รูปภาพลายอักษร</p>
        <p style={{ fontSize: '18px' }}>เพื่อให้จดจำและแปลงเป็นตัวอักษร</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {selectedFile ? <img src={file} style={{ maxWidth: '100%', height: 'auto' }} /> : null}
      </div>
      <div
        className='drag'
        style={{
          border: '2px dashed black',
          borderRadius: '8px',
          padding: '20px',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
        
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {selectedFile ? (
          <div style={{ textAlign: "center" }}>
            <p>ไฟล์ภาพที่เลือก:</p>
            <p>{selectedFile.name}</p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ display: 'block', fontSize: '1vw'}}>อัพโหลดรูปภาพ</h2>
              <p style={{ fontSize: '0.8333vw', color: '#8D8D8D' }}>หรือ ลากรูปภาพลงที่นี้</p>
            </div>
          </>
        )}
      </div>
      <div style={{ marginTop: '5px', maxWidth: '100%', textAlign: 'center' }}>
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          style={{ width: '163px', height: '41px', borderRadius: '20px', boxShadow: '0px 4px 4px', fontSize: '20px', fontWeight: 300, backgroundColor: 'white' }}
        >
          สร้างข้อความ
        </button>
      </div>
    </div>
  );
}

export default uploadFile;
