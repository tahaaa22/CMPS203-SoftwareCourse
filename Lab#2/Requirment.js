/*IMPORTANT NOTES
1- you are using JS Name Casing (camelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/


class Point {
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {

    this.startingPoint = startingPoint;
    this.width = width;//sets the width of the rectangle with passed parameter
    this.height = height;//sets the height of the rectangle with passed parameter
  }

  validateHeight(height) {
    if (!height || height <= 0) {
      throw Error("Invalid Height"); // throws an error in case of width or height < 0
    }
    return true;
  }

  validateWidth(width) {
    if(!width || width <= 0){
      throw Error("Invalid Width")
    }
    return true;
  }
  // ***************
  // METHODS
  // ***************

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  updateHeight(height) {
    if (this.validateHeight(height)) {
      this.height = height;
    }
  }

  updateRectangleParameters({ startingPoint, width, height }) {
    this.validateHeight(height);
    this.validateWidth(width);
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  //function that print the endpoints
  printEndPoints() {
    const topRight = this.startingPoint.coordX + this.width;
    const bottomLeft = this.startingPoint.coordY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  getWidth() {
    return this.width;
  }
}

function buildRectangle(Width, x, Height, y) {
  const mainPoint = new Point(x, y);
  const rectangle = new Rectangle(mainPoint, Width, Height);
  return rectangle;
}

function buildSquare(cordX, cordY, squareSide) {
  let square;
  if (validateHeight(squareSide)) {
    square = buildRectangle(squareSide, cordX, squareSide, cordY);
  }
  const squareArea = square.calculateArea();
  const squarePerimeter = square.calculatePerimeter();
  console.log("Square Area ", squareArea);
  console.log("Square Perimeter ", squarePerimeter);
}

const myRectangle = buildRectangle(2, 3, 5, 4);
const mySquare = constructSquare();

console.log(mySquare.calculatePerimeter());
mySquare.endPoints();

myRectangle.updateHeight(3);
