import React from 'react';
import sarah from '../assets/sarah.png';
import riya from '../assets/riya.png';
import harley from '../assets/harley.png';
import raimee from '../assets/raimee.png';
import minh from '../assets/minh.png';

export default function About() {
  const teamMembers = [
    { img: sarah, text: "Sarah Cunningham" },
    { img: riya, text: "Riya Kannapareddy" },
    { img: harley, text: "Harley Paprocki" },
    { img: raimee, text: "Raimee Seal" },
    { img: minh, text: "Minh Vu" }
  ];

  return (
    <div style={{
      maxWidth: '1100px',
      margin: '2rem auto',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: 'black',
    }}>
      {/* Problem Section */}
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
          THE PROBLEM 🔎
        </h2>
        <p style={{
          textAlign: 'center',
          lineHeight: '1.6',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          On farms, fruit is filtered through a rigid binary system and in supermarkets, 
          imperfect—but edible—produce is tossed before it even has a chance to be used. 
          Waste directly impacts farmers, supermarkets, and non-profit food banks.
        </p>
      </section>

      {/* Solution Section */}
      <section style={{
        marginBottom: '3rem',
        padding: '2rem',
        backgroundColor: 'rgb(163, 195, 154)',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontSize: '2rem',
          color: 'black',
          fontWeight: '600'
        }}>
          HOW DO WE HELP? 🤝
        </h2>
        <p style={{
          textAlign: 'center',
          lineHeight: '1.6',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We created Last Pick, an AI-powered fruit classification 
          software for optical sorters. Our goal is to reduce food waste globally and prove 
          that even the last pick is good enough.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 style={{
          textAlign: 'center',
          margin: '3rem 0',
          fontSize: '2rem',
          color: 'black',
          fontWeight: '600',
          position: 'relative'
        }}>
          MEET THE TEAM
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#86a97c',
            margin: '0.5rem auto 0',
          }}></div>
        </h2>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              textAlign: 'center',
            }}>
              <div style={{
                width: '180px',
                height: '260px',
                margin: '0 auto',
                border: '4px solid #86a97c',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={member.img} 
                  alt={member.text}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />
              </div>
              <h3 style={{
                marginTop: '1.2rem',
                fontWeight: '600',
                fontSize: '1.2rem',
                color: 'black',
              }}>
                {member.text}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}