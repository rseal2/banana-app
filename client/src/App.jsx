import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ClassificationDisplay from './components/ClassificationDisplay';
import WebcamComponent from "./components/WebcamComponent";

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
      <div className="App">
        <WebcamComponent setClassification={setClassification} />
      </div>
      <ClassificationDisplay classification={classification} />
    </>
  );
}

export default App;
