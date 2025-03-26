class Shape {
    draw() {
        console.log("Рисуем Shape");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Рисуем Rectangle");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Рисуем Circle");
    }
}

const shape = [new Rectangle(), new Circle()];

for (const item of shape) {
    item.draw();
}

