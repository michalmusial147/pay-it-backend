import * as express from 'express'
import { Routes } from './routes/Routes'
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()

const PORT = 8080;


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.ts'],
    servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ], // files containing annotations as above
  };

const swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log(`app running on port ${PORT}`))

const routes = new Routes(app);
