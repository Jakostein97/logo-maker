const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

inquirer
.prompt ([
    {
        type: 'input',
        name: "text",
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: "textColor",
        message:  "Enter a color keyword for the text color"
    },
    {
        type: 'list',
        name: "shape",
        message:  "Choose a shape",
        choices: ['triangle', 'square', 'circle'],
    },   
    {
        type: 'input',
        name: "shapeColor",
        message:  "Enter a color keyword for the shape color",
    },
])
.then((responses) => {
    console.log(responses);
    let shapeChoice;
    switch(responses.shape) {
        case 'triangle':
            shapeChoice = new Triangle()
            break;
        case 'square':
            shapeChoice = new Square()
            break;
        case 'circle':
            shapeChoice = new Circle()
            break;

    }
    shapeChoice.setShapeColor(responses.shapeColor)
    shapeChoice.setShapeText(responses.text)
    shapeChoice.setTextColor(responses.textColor)
    const coolLogo = new SVG()
    coolLogo.setShape(shapeChoice)
    fs.writeFile('logo.svg', coolLogo.render())
    .then(() => {
        console.log('Generated logo.svg');
    })
})
