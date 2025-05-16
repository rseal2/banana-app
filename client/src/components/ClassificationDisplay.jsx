import React from "react";

const ClassificationDisplay = ({ classification }) => {
  if (!classification) return null;

  const [className, { confidence }] = classification;
  const percentage = (confidence * 100).toFixed(1);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>CLASSIFICATION RESULT</h1>
        
        <div style={styles.resultContainer}>
          <span style={styles.className}>{className}</span>
          
          <div style={styles.confidenceBarContainer}>
            <div 
              style={{
                ...styles.confidenceBar,
                width: `${percentage}%`,
                backgroundColor: '#86a97c'
              }}
            />
          </div>
          
          <span style={styles.confidenceText}>
            {percentage}% CONFIDENCE
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    padding: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    padding: '2rem',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
    border: '1px solid rgba(0,0,0,0.05)'
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.1rem', 
    fontWeight: '700',
    marginBottom: '1.5rem',
    letterSpacing: '1.5px'
  },
  resultContainer: {
    marginBottom: '1rem'
  },
  className: {
    display: 'block',
    fontSize: '1.8rem', 
    fontWeight: '700',
    color: '#86a97c',
    marginBottom: '1rem',
 },
  confidenceBarContainer: {
    height: '10px', 
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    margin: '1.5rem auto', 
    overflow: 'hidden'
  },
  confidenceBar: {
    height: '100%',
    transition: 'width 0.5s ease'
  },
  confidenceText: {
    display: 'block',
    fontSize: '1.6rem', 
    color: '#2c3e50',
    fontWeight: '600',
    marginTop: '1rem',
  }
};

export default ClassificationDisplay;