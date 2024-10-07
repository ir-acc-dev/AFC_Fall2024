import { useLocation, useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import { useEffect } from 'react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const { movies } = location.state || {};  

  useEffect(() => {
    if (!movies || movies.length === 0) {
      navigate('/error');  
    }
  }, [movies, navigate]);  

  return (
    <div>
      <div 
        style={{ 
          margin: '20px',
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
        {movies && movies.length > 0 && (
          movies.map((movie) => (
            <MovieCard key={movie.id} doggy={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Results;


