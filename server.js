const express = require('express');
const mongodb = require('./data/database');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



//connection
const port = process.env.PORT || 3000;


//Middleware
app
    .use(express.json())
    .use('/', require('./routes'))
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



//FirstTest
app.get('/', (req, res) => {
    res.send("Project w1-2. To access to more information type in the url /contacts")})



//Ignition of Database connection
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



