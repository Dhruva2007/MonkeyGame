
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){

monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite (400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x);

  
}


function draw() {
  background("white");
  
  if (ground.x<0){
    ground.x=ground.width/2
  }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  //gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
 //score   
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 500, 50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime= " + survivalTime, 100, 50)
  
  

  drawSprites();
  spawnFood();
  spawnObstacles();
}

function spawnFood() {
   
if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale = 0.1
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = banana.depth + 1;
}
  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,900,10);
   obstacle.velocityX = -4;
   obstacle.addImage(obstacleImage);   
   obstacle.scale = 0.1;
   obstacle.lifetime = 400;
   
   obstacle.depth = monkey.depth;
   monkey.depth = obstacle.depth + 1;
   
 }
  
}

