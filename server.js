require('dotenv').config();
const express = require('express');
const Upstox = require('upstox-js-sdk');

const app = express();
app.use(express.json());

const api = new Upstox();
api.init({ apiKey: process.env.UPSTOX_API_KEY });

app.get('/login', async (req, res) => {
    try {
        const loginUrl = await api.getLoginUri();
        res.json({ loginUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
