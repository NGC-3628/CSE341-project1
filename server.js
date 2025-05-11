const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


//This is listening from web traffic on port 3000
app.listen(port,() => {console.log(`Running on port ${port}`)});

