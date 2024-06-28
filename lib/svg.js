class SVG {
    constructor() {
        this.shapeElement = ""
    }
    render() {
        return `<svg width='300' height="300">${this.shapeElement}</svg>`
    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
}

module.exports = SVG;
