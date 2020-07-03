const readlineSync = require("readline-sync");

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        return false;
    }
}

rectangle1 = new Rectangle(10, 10, 30, 20);
rectangle2 = new Rectangle(40, 40, 70, 65);
rectangle3 = new Rectangle(3, 6, 16, 9);

console.log("Collision entre ractangle1 et les 2 autres ");
console.log(rectangle1.collides(rectangle2));
console.log(rectangle1.collides(rectangle3));

console.log("Collision entre ractangle2 et les 2 autres ");
console.log(rectangle2.collides(rectangle1));
console.log(rectangle2.collides(rectangle3));

console.log("Collision entre ractangle3 et les 2 autres ");
console.log(rectangle3.collides(rectangle1));
console.log(rectangle3.collides(rectangle2));
