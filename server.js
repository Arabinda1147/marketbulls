require('dotenv').config();
const express = require('express');
const Upstox = require('upstox-js-sdk');

const app = express();
app.use(express.json());

const api = new Upstox();
api.init({ 
    apiKey: process.env.UPSTOX_API_KEY,
    apiSecret: process.env.UPSTOX_API_SECRET,
    redirectUri: process.env.UPSTOX_REDIRECT_URI
});

// Endpoint to get login URL
app.get('/login', async (req, res) => {
    try {
        const loginUrl = await api.getLoginUri();
        res.json({ loginUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
