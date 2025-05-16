let cols, rows;
let spacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  stroke(180, 180, 255, 40);
}

function draw() {
  background(15, 15, 30, 30);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing;
      let y = j * spacing;

      let d = dist(mouseX, mouseY, x, y);
      let offset = sin((frameCount + x + y) * 0.01) * 5;

      let dx = 0;
      let size = 2;

      if (d < 100) {
        dx = cos(d * 0.05 + frameCount * 0.05) * 5;
        size = map(d, 0, 100, 4, 2);
      }

      ellipse(x + offset + dx, y + offset, size);
    }
  }
}
