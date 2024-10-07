import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';

const NavBar = () => {
  const { VITE_TMDB_API_KEY } = process.env;
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]); 
  const navigate = useNavigate();
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);  // Capture the search input
  };

  const handleSearchSubmit = () => {

    if (!searchQuery.trim()) return; // Prevent empty searches
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        include_adult: 'false',
        language: 'en-US',
        page: '1',
        query: searchQuery,  
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_KEY}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results);  
        navigate('/results', { state: { movies: response.data.results } });  
      })
      .catch((error) => {
        console.error(error);
      });

    setSearchQuery("")
  };

 
  const handleNowPlayingClick = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_KEY}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results); 
        navigate('/results', { state: { movies: response.data.results } });  
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Douro Film Database
        </Typography>

       
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" onClick={handleNowPlayingClick}>
            Now Playing
          </Button>
        </Box>


        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchSubmit();  
            }
          }}
          autoComplete="off"
          variant="outlined"
          size="small"
          placeholder="Search Movies"
          sx={{ ml: 2, backgroundColor: 'black', borderRadius: '4px'}}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

