let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
  noStroke();
}

function draw() {
  background(10, 10, 30, 20); // semi-transparent background for trailing effect
  for (let p of particles) {
    p.update();
    p.show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 4);
    this.speed = random(0.3, 1);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) this.y = 0;
  }

  show() {
    fill(255, 255, 255, 80);
    ellipse(this.x, this.y, this.size);
  }
}
