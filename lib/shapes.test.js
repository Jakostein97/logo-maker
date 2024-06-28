const { Circle, Square, Triangle } = require('../lib/shapes.js');

describe('Shape rendering', () => {
  test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setShapeColor('blue');
    shape.setShapeText('ABC');
    shape.setTextColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="130" r="90" fill="blue"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>');
  });

  test('Square renders correctly', () => {
    const shape = new Square();
    shape.setShapeColor('green');
    shape.setShapeText('XYZ');
    shape.setTextColor('yellow');
    expect(shape.render()).toEqual('<rect x="0" y="0" width="300" height="300" fill="green"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">XYZ</text>');
  });

  test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setShapeColor('purple');
    shape.setShapeText('123');
    shape.setTextColor('white');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">123</text>');
  });
});
