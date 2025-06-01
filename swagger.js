const swaggerAutogen =  require('swagger-autogen')();

const doc = {
    info: {
        title: 'Mu Api', 
        description: 'usersApi'
    },
    host: 'https://prject1-vdd5.onrender.com',
    schemas: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger JSON file has been generated');
}).catch(err => {
    console.error('Error generating Swagger JSON:', err);
});;
