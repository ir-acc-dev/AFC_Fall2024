import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

export default function MovieCard({doggy}) {

    const posterRoute = `https://image.tmdb.org/t/p/w500${doggy.poster_path}`

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image= {posterRoute}
          alt="green iguana"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {doggy.title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {doggy.overview}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}