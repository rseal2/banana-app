import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ClassificationDisplay from './components/ClassificationDisplay'

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
        <ClassificationDisplay classification="Rotten"/>
    </>
  );
}

export default App;
