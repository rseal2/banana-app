import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './WebcamComponent.css'; 

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [facingMode, setFacingMode] = useState('user'); // 'user' or 'environment'

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  const switchCamera = () => {
    setFacingMode(prev => (prev === 'user' ? 'environment' : 'user'));
  };

  const videoConstraints = {
    facingMode: facingMode,
    width: 640,
    height: 350,
  };

  return (
    <div className="webcam-container">
      <h2>Webcam Component</h2>
      
      {imgSrc ? (
        <div className="captured-image">
          <img src={imgSrc} alt="Captured" />
          <button onClick={() => setImgSrc(null)}>Retake</button>
        </div>
      ) : (
        <div className="webcam-view">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <div className="controls">
            <button onClick={capture}>Capture photo</button>
            <button onClick={switchCamera}>
              Switch Camera {facingMode === 'user' ? '(Front)' : '(Back)'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;