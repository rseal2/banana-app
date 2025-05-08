import React, { useRef, useState } from 'react';
import ClassificationDisplay from './ClassificationDisplay';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [classification, setClassification] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot(); // automatically converts to a base64 jpeg string
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setClassification(null); // reset classification on new capture
    } else {
      console.error('No image captured.');
    }
  };

  const sendToRoboflow = async () => {
    if (!capturedImage) return;
  
    try {
      const base64Data = capturedImage.split(",")[1]; // remove data:image/jpeg;base64, prefix
      const response = await fetch(
        'https://serverless.roboflow.com/banana-classification-eprkr/2?api_key=tQqAGtwn8vsADYX5nrcT',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: base64Data,
        }
      );
  
      const data = await response.json();
      console.log(data);

      // extract top prediction
      const predictions = Object.entries(data.predictions); 
      if (predictions.length > 0) { 
        predictions.sort((a, b) => b[1].confidence - a[1].confidence);
        setClassification(predictions[0]);
      } else { 
        setClassification(["No predictions", {confidence : 0}]); 
      }
    } catch (error) {
      console.error('Error sending image to Roboflow:', error);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {!capturedImage ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          style={{ borderRadius: "8px" }}
          videoConstraints={{
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          }}
        />
      ) : (
        <img
          src={capturedImage}
          alt="Captured"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {!capturedImage ? (
          <button onClick={captureImage}>Capture Image</button>
        ) : (
          <>
            <button onClick={sendToRoboflow}>
              {"Classify with Roboflow"}
            </button>
            <button
              onClick={() => {
                setCapturedImage(null);
                setClassification(null);
              }}
            >
              Retake Photo
            </button>
          </>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <ClassificationDisplay classification={classification} />
      </div>
    </div>
  );
};

export default WebcamComponent;