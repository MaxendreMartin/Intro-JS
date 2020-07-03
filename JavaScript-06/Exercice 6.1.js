const readlineSync = require("readline-sync");

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circle = new Circle(0, 0, 5);
console.log(circle);
console.log("Voici la surface du cerle: " + circle.surface);
circle.move(3, 7);
console.log("Déplacement 3x et 7y");
console.log(circle);
