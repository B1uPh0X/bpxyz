function preload() {
  newfont = loadFont("..\\assets\\fonts\\linear-beam\\Linebeam.ttf");

}

function setup() {
    createCanvas(windowWidth-100, windowHeight-50);
  }
  function draw() {
    textFont(newfont);
    background(0);
    fill(255);
    textSize(124);
    textAlign(CENTER,CENTER);
    
    var oneX = (mouseX-(width/2))/8;
    var oneY = (mouseY-(height/2))/8;
    var twoX = (mouseX-(width/2))/4;
    var twoY = (mouseY-(height/2))/4;
    var theX = (mouseX-(width/2))/2;
    var theY = (mouseY-(height/2))/2;

    fill(0,255,0,128);
    text("B1uPh0X", (width/2)-oneX, (height/2)-oneY);
    fill(0,255,255,128);
    text("B1uPh0X", (width/2)+oneX, (height/2)+oneY);

    fill(255,255,0,128);
    text("B1uPh0X", (width/2)-twoX, (height/2)-twoY);
    fill(255,0,255,128);
    text("B1uPh0X", (width/2)+twoX, (height/2)+twoY);

    fill(255,0,0,128);
    text("B1uPh0X", (width/2)-theX, (height/2)-theY);
    fill(0,0,255,128);
    text("B1uPh0X", (width/2)+theX, (height/2)+theY);

  }