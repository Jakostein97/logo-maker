const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateShapes = require('./lib/shapes.js');

class Shapes {
    constructor(triangle, circle, square) {
        this.triangle = triangle;
        this.circle = circle;
        this.square = square;
    }
}

