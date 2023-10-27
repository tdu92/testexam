class Circle {
    x;
    y;
    radius;
    color;
    canvas;
    context;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillstyle = this.color;
        this.context.fill();
        this.context.closePath();
    }
}