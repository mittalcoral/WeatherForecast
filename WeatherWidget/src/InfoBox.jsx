import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import weather from './assets/weather.jpg'

function InfoBox({infoBox}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={weather}
          alt="City"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
             <p>{infoBox.city}</p>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <p>Temperature = {infoBox.temp}</p>
             <p>Min Temperature = {infoBox.tempMin}</p>
             <p>Max Temperature = {infoBox.tempMax}</p>
             <p>Humidity = {infoBox.humidity}</p>
             <p>The weather is described as {infoBox.weather} and feels like {infoBox.feelsLike}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default InfoBox