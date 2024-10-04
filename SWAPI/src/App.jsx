import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import axios from 'axios'

function App() {

  const [data, setData] = useState(null);
  const endpoint = 'https://swapi.dev/api/people';

  const handleSubmit = async () => {
    try {
      const response = await axios.get(endpoint);
      setData(response.data.results);
    } catch (error) {
      console.error('Error getting data: ', error);
    }
  };

  const handleReset = () => {
    setData(null);
  };
  

  return (
    <>
      <h1>SWAPI</h1>
      <h1>The Star Wars API</h1>
      <Table data={data} />
      <button onClick={handleSubmit}>Display</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
