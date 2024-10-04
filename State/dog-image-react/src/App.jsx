import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import DogCard from "./components/DogCard"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  // 1. Utilize endpoint
  // 2. Get a response, parse, if good, else throw error
  // 3. Do something with data
  // 4. Handle errors

  const [dogImage, setDogImage] = useState("")

  const endpoint = `https://dog.ceo/api/breeds/image/random`

  function handleClick() {
    axios
      .get(endpoint)
      .then(response => setDogImage(response.data.message))
      .catch(error => {
        console.error("Error: ", error.message)})
  }

  useEffect(() => {
    axios
      .get(endpoint)
      .then(response => setDogImage(response.data.message))
      .catch(error => {
        console.error("Error: ", error.message)
      })
  }, [])

  return (
    <>

      <h1>Random Dog Image Generator</h1>
      <DogCard imagePath={dogImage}/>
      <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="warning">
        Error
      </Button>
    </Stack>
      <div><button onClick={handleClick}>Click Me</button></div>
      
      
     
    </>
  )
}

export default App
