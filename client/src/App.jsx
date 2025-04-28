import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ClassificationDisplay from './components/ClassificationDisplay'
import WebcamComponent from "./components/WebcamComponent";

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])  

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api/users')
    setArray(response.data.users)
  };

  useEffect(() => {
    fetchAPI()
  }
  , [])
  return (
    <>
      <div className="App">
        <WebcamComponent />
        </div>
        <ClassificationDisplay classification="Rotten"/>
    </>
  );
}

export default App;
