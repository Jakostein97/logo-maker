class Shape {
    constructor () {
         this.shapeColor = '';
         this.textColor = '';
         this.shapeText = '';
    }

    setShapeColor(shapeColor) {
        this.shapeColorolor = shapeColor
    }

    setTextColor(textColor) {
        this.textColor = textColor
    }
    setShapeText(shapeText) {
        this.shapeText = shapeText
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`
    }
}


const square = new Square();
square.setShapeColor('red')
const svg = square.render()
console.log(svg)