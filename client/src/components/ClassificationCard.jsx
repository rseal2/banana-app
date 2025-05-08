import React from 'react';
import { FiActivity } from 'react-icons/fi';

const ClassificationCard = ({ classification }) => {
  if (!classification) return null;

  const [className, { confidence }] = classification;
  const percentage = (confidence * 100).toFixed(1);

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <FiActivity style={styles.cardIcon} />
        <h2 style={styles.cardTitle}>Classification Result</h2>
      </div>
      <div style={styles.classificationResult}>
        <h3 style={styles.className}>{className}</h3>
        <div style={styles.confidenceMeter}>
          <div 
            style={{ 
              ...styles.confidenceBar, 
              width: `${percentage}%`,
              background: confidence > 0.9 
                ? '#86a97c' 
                : confidence > 0.7 
                  ? '#f0ad4e' 
                  : '#d9534f'
            }}
          />
        </div>
        <p style={styles.confidenceText}>
          {percentage}% confidence
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    overflow: 'hidden'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem 1.5rem',
    borderBottom: '1px solid rgba(0,0,0,0.05)'
  },
  cardIcon: {
    color: '#86a97c',
    fontSize: '1.2rem'
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: 0,
    color: '#2c3e50'
  },
  classificationResult: {
    padding: '1.5rem',
    textAlign: 'center'
  },
  className: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 1rem',
    textTransform: 'capitalize'
  },
  confidenceMeter: {
    height: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    margin: '1.5rem 0',
    overflow: 'hidden'
  },
  confidenceBar: {
    height: '100%',
    transition: 'width 0.5s ease, background 0.3s ease'
  },
  confidenceText: {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '500'
  }
};

export default ClassificationCard;