import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const {VITE_TMDB_API_KEY} = process.env

  const handleNowPlayingClick = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_KEY}`
      }
    };

    axios(options)
      .then(response => {
        setMovies(response.data.results); 
        console.log(response);
        navigate('/results', { state: { movies: response.data.results } }); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Where Porto's Magic Meets the World of Film</h1>
      <p className="landing-description">Dive Into Your Next Cinematic Adventure!</p>
      <button className="landing-button" onClick={handleNowPlayingClick}>Now Playing</button>
    </div>
  );
};

export default LandingPage;
