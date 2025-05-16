function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(200, 200, 255, 50);
}

function draw() {
  background(10, 10, 20, 20);
  translate(0, height / 2);
  let amp = map(mouseX, 0, width, 10, 100);

  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = sin((x + frameCount) * 0.01) * amp;
    vertex(x, y);
  }
  endShape();
}
