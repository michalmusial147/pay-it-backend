import * as express from 'express';
const path = require('path');
//console.log((path.join(__dirname, 'build', 'index.html')));

export class Routes {
  constructor(private app: express.Application) {
    // super(app, 'UsersRoutes');
    this.configureRoutes();
  }
 
  
  configureRoutes() {
    /**
    * @swagger
    * /helloWorld:
    *   get:
    *     summary: Retrieve a "Hello World"
    *     description: Tests server
    *     responses: 
    *       '200':
    *        description: prints Hello Worlds
    */
    this.app.get('/helloWorld', function (req, res) {
      res.send("<h1>Hello World!<h1>");
    });

    this.app.use(express.static(path.join(__dirname,  '../build')));
    
    /**
    * @swagger
    * /:
    *   get:
    *     summary: Serves index page
    *     description: Serves index page
    *     responses: 
    *       '200':
    *        description: Served build directory
    */
    this.app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
      
    return this.app;
  }

}