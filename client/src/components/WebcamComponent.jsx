import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot(); // base64 string
    if (imageSrc) {
      setCapturedImage(imageSrc); // save base64 directly
    } else {
      console.error('No image captured.');
    }
  };

  const sendImage = async () => {
    if (!capturedImage) {
      console.error('No image to send.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8080/classify', {
        image: capturedImage,  // directly send base64
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Backend Response:', response.data);
    } catch (error) {
      console.error('Error sending image:', error);
    }
  };

  return (
    <div>
      {!capturedImage ? (
        <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        videoConstraints={{
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user" 
        }}
      />
      ) : (
        <img src={capturedImage} alt="Captured" />
      )}
      <div>
        {!capturedImage ? (
          <button onClick={captureImage}>
            Capture Image
          </button>
        ) : (
          <>
            <button onClick={sendImage}>Send Image</button>
            <button onClick={() => setCapturedImage(null)}>Retake</button>
          </>
        )}
      </div>
    </div>
  );
};

export default WebcamComponent;
