const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const HYPIXEL_API_KEY = 'PUT_YOUR_HYPIXEL_API_KEY_HERE';

app.use(express.json());

app.get('/language/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Step 1: Get UUID
    const mojangRes = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    const uuid = mojangRes.data.id;

    // Step 2: Get language from Hypixel
    const hypixelRes = await axios.get(`https://api.hypixel.net/player?key=${HYPIXEL_API_KEY}&uuid=${uuid}`);
    const language = hypixelRes.data.player?.language || 'Unknown';

    res.json({ username, uuid, language });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Player not found or Hypixel API failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});
