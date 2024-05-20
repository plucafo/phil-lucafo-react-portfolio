import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// For use navigation within the react page
import { useNavigate } from "react-router-dom";


export default function PortfolioCard({ title, description, repoUrl, demoUrl, cardImg }) {
  function handleNavigation(url) {
    window.open(url, '_blank');
  }
  return (
    <Card sx={{ mx: 'auto', my: 'auto' }} raised>
      <CardMedia
        component="img"
        alt="project image"
        height="340"
        image={cardImg}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain"}}
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
        <Button size="small" onClick={() => handleNavigation(repoUrl)}>Github</Button>
        <Button size="small" onClick={() => handleNavigation(demoUrl)}>Live Demo</Button>
      </CardActions>
    </Card>
  );
}

