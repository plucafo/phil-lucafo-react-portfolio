import React, { useState } from "react";
import { Grid } from "@mui/material";

import PortfolioCard from "../../components/Card/PortfolioCard";

export default function Portfolio() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PortfolioCard
          title="Project 1"
          description="Here is another slightly different placeholder description for whatever project I put here."
          repoUrl="https://google.com"
          demoUrl="https://google.com"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PortfolioCard
          title="Project 1"
          description="Here is another slightly different placeholder description for whatever project I put here."
          repoUrl="https://google.com"
          demoUrl="https://google.com"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PortfolioCard
          title="Project 1"
          description="Here is another slightly different placeholder description for whatever project I put here."
          repoUrl="https://google.com"
          demoUrl="https://google.com"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PortfolioCard
          title="Project 1"
          description="Here is another slightly different placeholder description for whatever project I put here."
          repoUrl="https://google.com"
          demoUrl="https://google.com"
        />
      </Grid>
      
    </Grid>
  );
}
