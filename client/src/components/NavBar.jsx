import { Link } from 'react-router-dom';
import logo from '../assets/brand.png'; 

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <img 
  src={logo} 
  alt="Logo" 
  style={{ height: '100px' }}
/>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={linkStyle}>CLASSIFICATION</Link>
        <Link to="/dashboard" style={linkStyle}>DASHBOARD</Link>
        <Link to="/about" style={linkStyle}>ABOUT</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#86a97c',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.3rem',
};