var qube, qubeRightImg, qubeLeftImg
var ground, groundImg
var enemy, enemyImg

function preload() {
qubeRightImg = loadImage("images/playerRight.png")
qubeLeftImg = loadImage("images/playerLeft.png")
groundImg = loadImage("images/ground.png")
enemyImg = loadImage("images/enemy.png")
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 390, 50, 50);
  ground.addImage("grass", groundImg);
  ground.scale = 1.7;
  enemy = createSprite(650, 250, 50, 50);
  enemy.addImage("purpleqube", enemyImg);
  enemy.scale = 0.8;
  qube = createSprite(200, 250, 50, 50);
  qube.addImage("playerRight", qubeRightImg);
  qube.scale = 0.8;
}

function draw() {
  background(173, 216, 230);  
  if(keyDown(LEFT_ARROW)) {
  qube.x = qube.x - 10
  qube.addImage("playerLeft", qubeLeftImg);
  qube.changeAnimation("playerLeft")
  }
  if(keyDown(RIGHT_ARROW)) {
  qube.x = qube.x + 10
  qube.changeAnimation("playerRight")
  }
  if(keyDown(UP_ARROW)) {
  qube.y = qube.y - 10
  }
  if(keyDown(DOWN_ARROW)) {
  qube.y = qube.y + 10
  }
  drawSprites();
}