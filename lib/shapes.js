
class Circle {
  constructor() {
    this.shape = 'circle';
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle {
  constructor() {
    this.shape = 'triangle';
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Square {
  constructor() {
    this.shape = 'square';
  }
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
  setColor(color) {
    this.color = color;
  }
}
module.exports = { Circle, Triangle, Square };