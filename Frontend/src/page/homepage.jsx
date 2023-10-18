import React , {useState} from 'react';
import UploadFile from '../components/uploadFile';
import GenTextBox from '../components/genTextBox';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import './homepage.css';

export default function Homepage() {
  const [generatedText, setGeneratedText] = useState('');

  const handleFileUpload = (text) => {
    setGeneratedText(text);
    console.log(text)
    console.log(generatedText)
  }

  return (
    <>
      <Navbar />    
      <div className="upload-gen-container">
        <div className="upload-file">
          <UploadFile onFileUpload={handleFileUpload} />
        </div>
        <div className="gen-text-box">
          <GenTextBox generatedText={generatedText} />
        </div>
      </div>
      <Footer />
    </>
  );
}
