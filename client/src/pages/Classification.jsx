import WebcamComponent from "../components/WebcamComponent";
import "../components/WebcamComponent.css";

export default function Classification() {
    return (
        <div style={{
            maxWidth: '1100px',
            margin: '2rem auto',
            padding: '2rem',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: 'black',
          }}>        
        {/* Classification/Image Capturing Section */}
        <section style={{
        marginBottom: '3rem',
        padding: '1rem',
        backgroundColor:'rgb(194, 215, 188)',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontSize: '2rem',
          color: 'black',
          fontWeight: '600'
        }}>
          CLASSIFYING FRUIT 🍌
        </h2>
        <p style={{
          textAlign: 'center',
          lineHeight: '1.6',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Ideally, we would want to integrate this technology with hardware so that farms and supermarkets can use it to 
          classify fruit as it comes in. Right now, we have support for bananas, but we are working on expanding to other fruits as well! <br />
        </p>
      </section>
       {/* Classification/Image Capturing Section */}
       <section style={{
        marginBottom: '3rem',
        padding: '1rem',
        backgroundColor:'rgb(163, 195, 154)',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontSize: '2rem',
          color: 'black',
          fontWeight: '600'
        }}>
          HOW TO USE OUR APP 🧑‍💻
        </h2>
        <p style={{
          textAlign: 'center',
          lineHeight: '1.6',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          To use this app, take a picture of your banana with a neutral background and click "Capture Image." After that, click 
          "Classify with Roboflow" to get the classification result. You should then see the classification result, along with the confidence score.
        </p>
      </section>
        <WebcamComponent />
        </div>
    );
  }
