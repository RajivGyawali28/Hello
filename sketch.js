var rocket;
var bird;
var sky;
var superman_img;
var rocket_img, bird_img;
var superman;
var score=0;

function preload(){
  superman_img=loadImage("images/superman.png");
  rocket_img=loadImage("images/rocket.png");
  bird_img=loadImage("images/bird.png");
  
  }

function setup() {
  createCanvas(500,500);

  sky=createSprite(250,250,800,500);
  sky.shapeColor="LightBlue";
  sky.velocityX=-1;

  superman = createSprite(100,350,80,40);
  superman.addImage(superman_img);
  superman.scale=0.3;

  rocketGroup = new Group();
  birdGroup = new Group();

  superman.debug=true;
  superman.setCollider("rectangle",0,0,200,200);

  rocketGroup.debug=true;
}

function draw() {
  background("white");

  fill("orange");
  textSize(12);
  text("Score:"+score,100,40);

if(rocketGroup.isTouching(superman)||birdGroup.isTouching(superman)){
  fill("green");
  textSize(30);
  text("Game Over!!",250,250);
  rocketGroup.setVelocityXEach(0);
  rocketGroup.setLifetimeEach(-1);
  birdGroup.setVelocityXEach(0);
  birdGroup.setLifetimeEach(-1);
}

if(sky.x<100){
  sky.x=250;
}
 spawnRocket();
 spawnBird();

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    superman.y=superman.y-10;
  }
  if(keyCode===DOWN_ARROW){
    superman.y=superman.y+10;
  }
}

function spawnRocket(){
  if(frameCount % 50 === 0){
    rocket = createSprite(570, Math.round(random(100, 400)));
    rocket.velocityX= -24;
    rocket.addImage(rocket_img);
    rocket.scale= 0.1;
    rocket.lifetime= 200;
    rocketGroup.add(rocket);

    rocket.depth=superman.depth;
    console.log(superman.depth);
    console.log(rocket.depth);
  }
}

function spawnBird(){
  if(frameCount % 50 === 0){
    bird = createSprite(570, Math.round(random(100, 300)));
    bird.velocityX= -4;
    bird.addImage(bird_img);
    bird.scale= 0.1;
    bird.lifetime= 200;
    birdGroup.add(bird);

    superman.depth=bird.depth;
    superman.depth=superman.depth+1;
  }
}