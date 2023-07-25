const express=require('express');
const app = express();
const axios = require('axios');
const port=3000;

// serve static files from public folder
app.use(express.static('public'));

app.listen(port, () => {  
    console.log(`The server is running on http://localhost:${port}`);   
});