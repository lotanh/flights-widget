const express = require('express')
const cors = require("cors");
const fetch = require('fetch')
const app = express();


app.use(express.json());
app.use(cors());



app.listen(8000, () => console.log('server running on port', 8000));