function Shape(name, sides) {
    this.name = name;
    this.sides= sides;
}

function Rectangle(h, w, name, sides) {
    this.height = h;
    this.width= w;
    Shape.call(this, name, sides)
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function () {
    return this.height * this.width;
}

Rectangle.prototype.permieter = function () {
    return 2*this.height + 2*this.width;
}

function Square(h, w, n, s) {
    if (h != w ){
        w = h;
    }

    Rectangle.call(this, h, w, n, s)
}

Square.prototype = Object.create(Rectangle.prototype);

var s = new Square (6, 6, 'square', 4);

console.log(s.area());
console.log(s.permieter());

var r = new Rectangle(6, 9, 'rectangle', 4);

console.log(r.area());
console.log(r.permieter());
console.log(r.sides);
console.log(r.name);
