class Database {
    save(data) {
        console.log(`Saving data to the database: ${JSON.stringify(data)}`);
    }
}

class LocalFile {
    save(data) {
        console.log(`Saving data to the local file: ${JSON.stringify(data)}`);
    }
}

class Shape {
    constructor(type, dimensions) {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
        this.type = type;
        this.dimensions = dimensions;
    }
    draw() {
        throw new Error("draw() method must be implemented in subclasses.");
    }
    calculateArea() {
        throw new Error("calculateArea() method must be implemented in subclasses.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle', { radius });
    }
    draw() {
        console.log(`Drawing a circle with radius ${this.dimensions.radius}`);
    }
    calculateArea() {
        return Math.PI * Math.pow(this.dimensions.radius, 2);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle', { width, height });
    }
    draw() {
        console.log(`Drawing a rectangle with width ${this.dimensions.width} and height ${this.dimensions.height}`);
    }
    calculateArea() {
        return this.dimensions.width * this.dimensions.height;
    }
}

class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super('Triangle', { sideA, sideB, sideC });
    }
    draw() {
        console.log(`Drawing a triangle with side lengths ${this.dimensions.sideA}, ${this.dimensions.sideB}, ${this.dimensions.sideC}`);
    }
    calculateArea() {
        const s = (this.dimensions.sideA + this.dimensions.sideB + this.dimensions.sideC) / 2;
        return Math.sqrt(s * (s - this.dimensions.sideA) * (s - this.dimensions.sideB) * (s - this.dimensions.sideC));
    }
}

// Example usage
const localFile = new LocalFile();
const database = new Database();

const circle = new Circle(5);
circle.draw();
console.log(`Area of the circle: ${circle.calculateArea()}`);
database.save(circle.dimensions);

const rectangle = new Rectangle(4, 6);
rectangle.draw();
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`);
localFile.save(rectangle.dimensions);
database.save(rectangle.dimensions);

const triangle = new Triangle(3, 4, 5);
triangle.draw();
console.log(`Area of the triangle: ${triangle.calculateArea()}`);
database.save(triangle.dimensions);
localFile.save(triangle.dimensions);

