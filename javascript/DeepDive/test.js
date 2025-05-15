function Cricle(radius) {
    if (!new.target) {
        return new Cricle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Cricle(4);
console.log(circle.getDiameter());