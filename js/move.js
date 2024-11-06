var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  background(255, 0, 200);
}
  
  function draw() {
    background(220);
    
    // Draw circle at mouse position
    circle(mouseX, mouseY, 50);
    
    // Change color based on position
    fill(mouseX/2, mouseY/2, 150);
  }