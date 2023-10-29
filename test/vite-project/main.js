import { byteMix } from "../../library/src";

let bm = new byteMix();

let window = bm.createWindow;

let box1 = bm.createRect(20, 20, 20, 20);
let box2 = bm.createRect(90, 20, 20, 20);

window.fillColor(box1);
window.fillColor(box2);

let iscolid = bm.checkCollision(box1, box2);
console.log(iscolid);
