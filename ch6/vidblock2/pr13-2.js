

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
document.write(circle.area);

