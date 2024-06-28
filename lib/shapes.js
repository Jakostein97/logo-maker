class Shape {
    constructor() {
        this.shapeColor = '';
        this.textColor = '';
        this.shapeText = '';
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setShapeText(shapeText) {
        this.shapeText = shapeText;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="300" height="300" fill="${this.shapeColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="130" r="90" fill="${this.shapeColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`;
    }
}

module.exports = { Circle, Triangle, Square };
