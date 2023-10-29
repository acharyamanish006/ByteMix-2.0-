import { checkCollision } from "./collision";
import { Canvas } from "./canvas";
import { Rectangle } from "./collision";
export class byteMix {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  createWindow = new Canvas(this.width, this.height);
  checkCollision = checkCollision;
  createRect(x, y, w, h) {
    return new Rectangle(x, y, w, h);
  }
}
