const express = require('express')
const cors = require("cors");
const app = express();
const fetch = require("node-fetch")
require('dotenv').config()
app.use(express.json());
app.use(cors());


app.get('/' , (req,res) => {
    res.send('Server app')
})













app.listen(8000, () => console.log('server running on port', 8000));