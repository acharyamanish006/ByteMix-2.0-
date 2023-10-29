export class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = 0;
    this.velocityY = 0;
  }
}

export function checkCollision(rectA, rectB) {
  console.log("col");
  // Calculate the sides of each rectangle
  const leftA = rectA.x;
  const rightA = rectA.x + rectA.width;
  const topA = rectA.y;
  const bottomA = rectA.y + rectA.height;

  const leftB = rectB.x;
  const rightB = rectB.x + rectB.width;
  const topB = rectB.y;
  const bottomB = rectB.y + rectB.height;

  // Check for collision along both the x-axis and y-axis
  return rightA > leftB && rightB > leftA && bottomA > topB && bottomB > topA;
}

function handleCollision(rectA, rectB) {
  // Determine the overlap between the two rectangles along the x and y axes
  const overlapX =
    Math.min(rectA.x + rectA.width, rectB.x + rectB.width) -
    Math.max(rectA.x, rectB.x);
  const overlapY =
    Math.min(rectA.y + rectA.height, rectB.y + rectB.height) -
    Math.max(rectA.y, rectB.y);

  // Determine the axis of minimum penetration
  if (overlapX < overlapY) {
    // Horizontal collision
    rectA.velocityX = -rectA.velocityX;
    rectB.velocityX = -rectB.velocityX;
  } else {
    // Vertical collision
    rectA.velocityY = -rectA.velocityY;
    rectB.velocityY = -rectB.velocityY;
  }
}

// Example usage:

const rect1 = new Rectangle(100, 100, 40, 30);
const rect2 = new Rectangle(150, 100, 30, 40);

// In your game loop or update function
if (checkCollision(rect1, rect2)) {
  handleCollision(rect1, rect2);
}
