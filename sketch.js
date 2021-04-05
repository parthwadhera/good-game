function setup() {
  createCanvas(800,400);
  var bigball = createSprite(400, 200, 50, 50);
  var ball = createSprite(200,200,20,20);
  ball.velocityX = 2;
  bigball.velocityX  = 2;
}

function draw() {
  background("blue");  
  drawSprites()
  
  
}