import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MissingPoster from '../assets/MissingPoster.jpeg'

export default function MovieCard({ doggy }) {
  // Conditional check: If `doggy.poster_path` is null, use a default image
  const posterImage = doggy.poster_path
    ? `https://image.tmdb.org/t/p/w200${doggy.poster_path}`
    : MissingPoster;  

  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"  
          image={posterImage}  
          alt={doggy.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {doggy.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {doggy.overview}
          </Typography>
          <hr />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rating: {Math.floor(doggy.vote_average)} / 10
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
