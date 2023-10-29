export class Canvas {
  constructor(width, height) {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width || window.innerWidth;
    this.canvas.height = height || window.innerHeight;
    console.log("canvas");
  }
  createBox(x, y, width, height) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(x, y, width, height);
  }
  fillColor(rect) {
    let x = rect.x;
    let y = rect.y;
    let width = rect.width;
    let height = rect.height;

    this.ctx.fillRect(x, y, width, height);
  }
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
