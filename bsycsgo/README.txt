# 🌐 Hypixel Player Language API

This is a simple custom API built with **Node.js** and the **Hypixel API** that returns the language setting of any player based on their UUID or username.

> 🛡️ Intended use: Integrate with [Cubelify Anti-Sniper](https://docs.cubelify.com/overlay/features/anti-sniper/custom)

---

## 📦 Features

- 🔍 Detect any player's Hypixel language
- 📛 Flags or blocks players based on language (optional)
- 📡 Compatible with Cubelify custom API endpoints

---

## 🚀 Endpoints

### `GET /language/:username`

Returns the language for the given Minecraft username.

**Example:**

**Response:**
```json
{
  "username": "Technoblade",
  "uuid": "4566e69f-c907-48ee-8d71-d7ba5aa00d20",
  "language": "en_US"
}


npm install
npm start

🌍 Public Hosting
To make it usable by Cubelify:

Deploy to Glitch, Replit, or Render

Get a public URL (e.g. https://your-api.glitch.me)

Add that in Cubelify under:

Overlay → Anti-Sniper → Method: Custom → POST URL

Get your Hypixel API key by running:

/api new
