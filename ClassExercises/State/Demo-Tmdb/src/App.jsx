import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Button from '@mui/material/Button';
import axios from 'axios'
import MovieCard from './components/MovieCard'

// 7eebbe258798c3fb889c856d6d40711c

function App() {

  const baseURL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  function handleClick() {

    let route = "movie/now_playing"
    let endpoint = `${baseURL}/${route}`

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWViYmUyNTg3OThjM2ZiODg5Yzg1NmQ2ZDQwNzExYyIsIm5iZiI6MTcyNzg3OTE2Ni4yMzE0MzYsInN1YiI6IjY2ZmQ1NzJiZTI2YTUzYzEyMjU5NjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWa5J1mFVlzlRi3LBKJ0CLOIaq6aC2Ts7Nr-E9sfBAE'
      }
    };
    
    axios(options)
      .then(function (response) {
        console.log(response.data)
        // response.data.results => array of movie objects
        let movieArray = response.data.results.map((movie) => {
          return <MovieCard doggy={movie}/>
        })
        setMovies(movieArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (

    <Router>

      <div className = 'App'>

        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <hr />
          {/* Router Routes will go here */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
          
        </div> 

      </div>


      <Button onClick={handleClick} variant="contained" color="success">
        Now Playing
      </Button>

      {movies}

      


      

    </Router>

    
  )

}

export default App
