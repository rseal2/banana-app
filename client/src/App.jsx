import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'; 
import Classification from './pages/Classification';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [classification, setClassification] = useState(null);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:5173/');
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Classification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
