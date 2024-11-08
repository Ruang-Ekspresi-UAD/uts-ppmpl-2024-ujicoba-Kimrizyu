// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let themePreference = "light"; // In-memory storage for theme preference

// Endpoint GET untuk mengambil preferensi tema
app.get("/api/theme", (req, res) => {
    res.json({ theme: themePreference });
});

// Endpoint POST untuk mengubah preferensi tema
app.post("/api/theme", (req, res) => {
    const { theme } = req.body;
    if (theme === "light" || theme === "dark") {
        themePreference = theme;
        res.json({ message: `Theme updated to ${theme}` });
    } else {
        res.status(400).json({ message: "Invalid theme" });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
