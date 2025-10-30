import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

function PokemonDisplay({ pokemonData, shinyToggle }) {
  if (!pokemonData) {
    return null; 
  }

  const sprites = shinyToggle ? pokemonData.sprites.front_shiny && pokemonData.sprites.back_shiny : pokemonData.sprites.front_default && pokemonData.sprites.back_default;

    // set sprites based on shiny toggle
    const spriteList = [
      { name: 'Front', url: shinyToggle ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default },
      { name: 'Back', url: shinyToggle ? pokemonData.sprites.back_shiny : pokemonData.sprites.back_default }
    ].filter(s => s.url);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
        {spriteList.map(sprite => (
          <Grid item key={sprite.name}>
            <Card sx={{ width: 150 }}>
              <CardMedia
                component="img"
                image={sprite.url}
                alt={sprite.name}
                sx={{ objectFit: 'contain', backgroundColor: '#f2f2f2' }}
              />
              <CardContent>
                <Typography variant="body2" textAlign="center">
                  {sprite.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}

export default PokemonDisplay;
