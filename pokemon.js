const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/pokemon/:name', async (req, res) => {
  const {name} = req.params;

  try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Pokémon not found' });
    }
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));