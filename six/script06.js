let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
  noStroke();
}

function draw() {
  background(10, 10, 30, 20);
  for (let p of particles) {
    p.update();
    p.avoidMouse();
    p.show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 4);
    this.speed = random(0.3, 1);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) this.y = 0;
  }

  avoidMouse() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 50) {
      let angle = atan2(this.y - mouseY, this.x - mouseX);
      this.x += cos(angle) * 1;
      this.y += sin(angle) * 1;
    }
  }

  show() {
    fill(255, 255, 255, 80);
    ellipse(this.x, this.y, this.size);
  }
}
