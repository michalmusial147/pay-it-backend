"use strict";
exports.__esModule = true;
var express = require("express");
var Routes_1 = require("./routes/Routes");
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var app = express();
var PORT = 8080;
var options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.ts'],
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server'
        },
    ]
};
var swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(PORT, function () { return console.log("app running on port " + PORT); });
var routes = new Routes_1.Routes(app);
