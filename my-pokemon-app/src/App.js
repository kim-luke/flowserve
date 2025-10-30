import './App.css';
import { useState } from 'react';
import { TextField, Grid, Button, Box } from '@mui/material';

function App() {

  const [pokemonData, setPokemonData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await callPokemonAPI();
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const callPokemonAPI = async () => {
    const pokemonName = searchValue;

    try {
      const response = await fetch(`/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Pokemon not found!');
      }

      const data = await response.json();
      setPokemonData(data);
      debugger;

    } catch (err) {
      console.log('Pokemon not found :(')
      setPokemonData(null);
    }
  };

  return (
    <div className="App">
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item size={12} textAlign={'center'}>
          <h1>Find a Pokemon!</h1>
        </Grid>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "row", gap: 2, width: 300 }}
        >
          <TextField
            id="filled-search"
            type="search"
            variant="filled"
            label="Enter a Pokemon's name"
            value={searchValue}
            onChange={handleChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Grid>
    </div>
  );
}

export default App;