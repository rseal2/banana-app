import React from 'react';
import sarah from '../assets/sarah.png';
import riya from '../assets/riya.png';
import harley from '../assets/harley.png';
import raimee from '../assets/raimee.png';
import minh from '../assets/minh.png';

export default function About() {
  // Sample data (replace with your actual images/text)
  const items = [
    { 
      img: sarah,
      text: "Sarah Cunningham" 
    },
    { 
      img: riya, 
      text: "Riya Kannapareddy" 
    },
    { 
      img: harley, 
      text: "Harley Paprocki" 
    },
    { 
      img: raimee, 
      text: "Raimee Seal" 
    },
    { 
      img: minh, 
      text: "Minh Vu" 
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '0 1rem'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Team</h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: '1.5rem'
      }}>
        {items.map((item, index) => (
          <div key={index} style={{
            width: '180px',
            textAlign: 'center'
          }}>
            <img 
              src={item.img} 
              alt={item.text}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <p style={{
              marginTop: '0.8rem',
              fontWeight: '500',
              fontSize: '1.1rem'
            }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}