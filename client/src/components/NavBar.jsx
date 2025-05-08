import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {/* Logo (Inline SVG) */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="#86a97c"  // Your brand color
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paste your SVG path(s) here */}
          <path d="M10 20L20 10L30 20L20 30Z" />
          <text x="10" y="25" fill="#86a97c">LOGO</text> {/* Optional text */}
        </svg>
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
};