const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Remove { default: axios }

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put('https://api.chatengine.io/users/', { // Fixed endpoint URL
            username: username,
            secret: username,
            first_name: username,
        }, {
            headers: { "private-key": "0769ac40-d4d7-4dde-8638-0474fdfd1a1a" },
        });
        return res.status(response.status).json(response.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data); // Use 'e' to handle the error response
    }
});

app.listen(3001);

