const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const generateShapes = require('./lib/shapes.js');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

inquirer
.prompt ([
    {
        type: 'input',
        name: "text",
        message: 'Enter up to three characters',
        default: "JAF",
    },
    {
        type: 'input',
        name: "textColor",
        message:  "Enter a color keyword for the text color",
        default: 'white',
    },
    {
        type: 'list',
        name: "shape",
        message:  "Choose a shape",
        choices: ['triangle', 'square', 'circle'],
        default: 'square',
    },   
    {
        type: 'input',
        name: "shapeColor",
        message:  "Enter a color keyword for the shape color",
        default: 'black',
    },
])
.then((responses) => {
    console.log(responses);
    fs.writeFile('logo.svg', JSON.stringify(responses))
    .then(() => {
        console.log('Generated logo.svg');
    })
})
