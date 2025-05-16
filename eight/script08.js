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
      let offset = sin((frameCount + x + y) * 0.01) * 5;
      ellipse(x + offset, y + offset, 2);
    }
  }
}
