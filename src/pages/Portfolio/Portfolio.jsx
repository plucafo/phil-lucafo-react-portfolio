import React, { useState } from "react";
import { Grid } from "@mui/material";

import PortfolioCard from "../../components/Card/PortfolioCard";

import imgOne from '../../assets/projects/melody-exchange.png';
import imgTwo from '../../assets/projects/code-quiz.png';
import imgThree from '../../assets/projects/weather-dashboard.png';
import imgFour from '../../assets/projects/svg-generator.png';

export default function Portfolio() {

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={12} lg={12}>
        <PortfolioCard
          title="Melody Exchange"
          description="An app that allows users to create an account and list musical instruments for sale. Users can upload an image with their post."
          repoUrl="https://github.com/plucafo/melody-exchange"
          demoUrl="https://melody-exchange-206a7ddfc868.herokuapp.com/"
          cardImg={imgOne}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PortfolioCard
          title="Timed Coding Quiz"
          description="This project is a simple web-based quiz game where users can test their coding knowledge within a limited time frame. "
          repoUrl="https://github.com/plucafo/timed-code-quiz"
          demoUrl="https://plucafo.github.io/timed-code-quiz/"
          cardImg={imgTwo}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PortfolioCard
          title="Weather Dashboard"
          description="A weather forecast dashboard using the open weather API. You can check the current weather and 5-day forecast by searching for a city."
          repoUrl="https://github.com/plucafo/weather-dashboard"
          demoUrl="https://plucafo.github.io/weather-dashboard/"
          cardImg={imgThree}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PortfolioCard
          title="SVG Logo Generator"
          description="The Logo Maker app is a command-line application that allows users to create simple logos with customizable text and shapes."
          repoUrl="https://github.com/plucafo/nosql-socialnetwork-api"
          demoUrl="https://www.youtube.com/watch?v=iIyO3I5wGuM&feature=youtu.be&themeRefresh=1"
          cardImg={imgFour}
        />
      </Grid>
      
    </Grid>
  );
}
