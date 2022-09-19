function setup() {
    createCanvas(windowWidth-100, windowHeight-50);
  }
  function draw() {
    setup();
    background(0);
    fill(255);
    textSize(96);
    var oneX = (mouseX-(width/2))/4;
    var oneY = (mouseY-(height/2))/4;
    text("B1uPh0X", (width/2)-oneX, (height/2)-oneY);
    text("B1uPh0X", (width/2)+oneX, (height/2)+oneY);
  }