const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Project w1-2. To access to more information type in the url /contacts")
});

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {
            console.log(`Database is listening an node Running in port ${port}`)
        });
    }
});

//This is listening from web traffic on port 3000


