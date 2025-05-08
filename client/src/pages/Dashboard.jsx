import React, { useState, useEffect } from 'react';
import ClassificationCard from '../components/ClassificationCard';
import { FiActivity, FiPieChart, FiAlertCircle } from 'react-icons/fi';

const Dashboard = () => {
  const [classification, setClassification] = useState(["Banana", { confidence: 0.92 }]);
  const [stats, setStats] = useState({
    itemsProcessed: 23017,
    accuracy: 94.7,
    wasteReduction: 53.7,
    alerts: 4
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setClassification(prev => [
        prev[0], 
        { confidence: Math.max(0.7, Math.min(0.99, prev[1].confidence + (Math.random() - 0.5) * 0.1)) 
      }]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <div style={styles.headerStats}>
            <div style={styles.statBadge}>
              <FiActivity style={styles.statIcon} />
              <span>{stats.itemsProcessed} items</span>
            </div>
            <div style={styles.statBadge}>
              <span style={styles.accuracyBadge}>{stats.accuracy}% accuracy</span>
            </div>
          </div>
        </header>

        <div style={styles.grid}>
          <ClassificationCard classification={classification} />
          
          {/* Stats Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <FiPieChart style={styles.cardIcon} />
              <h2 style={styles.cardTitle}>Today's Stats</h2>
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <h3 style={styles.statValue}>{stats.itemsProcessed}</h3>
                <p style={styles.statLabel}>Items Processed</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statValue}>{stats.accuracy}%</h3>
                <p style={styles.statLabel}>Accuracy</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statValue}>{stats.wasteReduction}%</h3>
                <p style={styles.statLabel}>Waste Reduction</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statValue}>{stats.alerts}</h3>
                <p style={styles.statLabel}>Alerts</p>
              </div>
            </div>
          </div>

          {/* Activity Card */}
          <div style={{ ...styles.card, gridColumn: 'span 2' }}>
            <div style={styles.cardHeader}>
              <FiAlertCircle style={styles.cardIcon} />
              <h2 style={styles.cardTitle}>Recent Activity</h2>
            </div>
            <div style={styles.activityList}>
              {[
                "Identified Banana with 92% confidence",
                "System recalibrated for better accuracy",
                "Alert: temperature spike detected in storage area",
                "New batch processed - 124 items",
                "System maintenance completed", 
                "1,209 bananas donated to local food bank",
              ].map((item, index) => (
                <div key={index} style={styles.activityItem}>
                  <div style={styles.activityDot} />
                  <p style={styles.activityText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Styling for dashboard 
const styles = {
  container: {
    display: 'flex',
    minHeight: '80vh',
    backgroundColor: 'rgb(163, 195, 154)',
    borderRadius: '12px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  mainContent: {
    flex: 1,
    padding: '1.5rem 2rem',
    overflow: 'auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem'
  },
  headerTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: 0
  },
  headerStats: {
    display: 'flex',
    gap: '1rem'
  },
  statBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    fontSize: '0.9rem'
  },
  statIcon: {
    color: '#86a97c'
  },
  accuracyBadge: {
    backgroundColor: '#e8f4f8',
    color: '#2c3e50',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: '500'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem'
  },
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    padding: '1.5rem'
  },
  statItem: {
    textAlign: 'center'
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#86a97c',
    margin: '0 0 0.25rem'
  },
  statLabel: {
    color: '#666',
    fontSize: '0.9rem',
    margin: 0
  },
  activityList: {
    padding: '0 1.5rem 1.5rem'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem 0',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    ':last-child': {
      borderBottom: 'none'
    }
  },
  activityDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#86a97c',
    flexShrink: 0
  },
  activityText: {
    margin: 0,
    color: '#2c3e50',
    fontSize: '1rem',
  }
};

export default Dashboard;