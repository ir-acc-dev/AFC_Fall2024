import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({imagePath}) {
  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dog
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This is a random dog image
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

