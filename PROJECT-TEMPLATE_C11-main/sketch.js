var ship, shipUping, shipDown;
var sea, seaImage;

function preload(){
  shipUping = loadAnimation("ship-1.png");
  shipDown = loadAnimation("ship-2.png");

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(2000,1000);
  

  sea = createSprite(20,500,20,20);
  sea.addImage("sea",seaImage);
  sea.scale = 0.6;
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(400,600,20,20);
  ship.addAnimation("uping",shipUping);
  ship.scale = 0.5;
}

function draw() {
  background("lightBlue")
  if (sea.x < 0){
    sea.x = sea.width/3.5;
  }

  if (keyDown("upArrow")&& ship.y >= 100){
    ship.velocityY = -10
  }

  drawSprites();
}
