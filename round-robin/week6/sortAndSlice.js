let a = [{ id: 1 }, { id: 5 }, { id: 3 }];
// let b = a.every(function(cur) {
//   return cur < 3;
// });
a.sort((i, j) => {
  return i.id - j.id > 0 ? 1 : -1;
});

console.log(a);

//
//

function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function(a, b) {
  this.x += a;
  this.y += b;
  console.log('moved:', this.x, this.y);
};

let a = new Shape(3, 3);
a.move(3, 3);

function Rectangle(x, y) {
  this.x = x;
  this.y = y;
}

Rectangle.prototype.moveAndArea = function(a, b) {
  Shape.prototype.move.call(this, a, b);
  let area = this.x * this.y;
  console.log(area);
};

let b = new Rectangle(0, 0);
b.moveAndArea(12, 12);

function Triangle(x, y) {
  Rectangle.call(this, x, y);
  Shape.call(this, x, y);
}
Triangle.prototype = Object.create(Rectangle.prototype);
Object.assign(Triangle.prototype, Shape.prototype);
Triangle.prototype.constructor = Triangle;

let c = new Triangle(6, 6);
// c.move(1, 1);
c.moveAndArea(0, 0);
