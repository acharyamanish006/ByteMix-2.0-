class Particle {
  constructor(x, y, mass) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.velocityX = 0;
    this.velocityY = 0;
    this.radius = 10;
  }

  applyForce(forceX, forceY) {
    // Calculate acceleration using Newton's second law (F = ma)
    const accelerationX = forceX / this.mass;
    const accelerationY = forceY / this.mass;

    // Update velocity based on acceleration
    this.velocityX += accelerationX;
    this.velocityY += accelerationY;
  }

  update() {
    // Update position based on velocity
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Simple ground collision: Bounce off the bottom of the screen
    if (this.y + this.radius >= HEIGHT) {
      this.y = HEIGHT - this.radius;
      this.velocityY = -Math.abs(this.velocityY); // Reverse and dampen the vertical velocity
    }
  }
}

const GRAVITY = 0.5;
const HEIGHT = 600;

// Example usage:

const particle = new Particle(100, 100, 1);

function updatePhysics() {
  // Apply gravity to the particle
  particle.applyForce(0, GRAVITY);

  // Update the particle's position and check for collisions
  particle.update();
}
