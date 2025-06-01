const swaggerAutogen =  require('swagger-autogen')();

const doc = {
    info: {
        title: 'Mu Api', 
        description: 'usersApi'
    },
    host: 'localhost:3000',
    schemas: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger JSON file has been generated');
}).catch(err => {
    console.error('Error generating Swagger JSON:', err);
});;
