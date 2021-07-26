"use strict";
exports.__esModule = true;
exports.helloWorld = void 0;
var express = require("express");
var path = require('path');
//console.log((path.join(__dirname, 'build', 'index.html')));
var helloWorld = /** @class */ (function () {
    function helloWorld(app) {
        this.app = app;
        // super(app, 'UsersRoutes');
        this.configureRoutes();
    }
    helloWorld.prototype.configureRoutes = function () {
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
        this.app.use(express.static(path.join(__dirname, '../build')));
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
    };
    return helloWorld;
}());
exports.helloWorld = helloWorld;
