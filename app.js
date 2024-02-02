const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors')

app.use(cors())


app.get('/characters/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    const url = `https://rickandmortyapi.com/api/character/${characterName}`;

    try {
        const response = await axios.get(url);
        const { name, status, species, gender, origin } = response.data;

        res.json({ name, status, species, gender, origin });
    } catch (error) {
        res.status(404).json({ error: 'Personaje no encontrado' });
    }
});

app.listen(3000, () => {
    console.log('Express está escuchando en el puerto http://localhost:3000');
});
