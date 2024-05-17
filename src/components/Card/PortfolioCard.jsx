import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// For use navigation within the react page
import { useNavigate } from "react-router-dom";


export default function PortfolioCard({ title, description, repoUrl, demoUrl }) {
  function handleNavigation(url) {
    window.open(url, '_blank');
  }
  return (
    <Card sx={{ mx: 'auto', my: 'auto' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://placehold.co/600x400"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNavigation(repoUrl)}>Share</Button>
        <Button size="small" onClick={() => handleNavigation(demoUrl)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

