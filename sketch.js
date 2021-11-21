var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jellyfish,jelly_img
var plastic,plastic_img
var turtle,turtle_img
var begin,begin_image
var middle,middle_img
var coral,coral_img



function preload(){

  
  jellyfish_img = loadImage("pics for game/jelly.png");
  
  plastic_img = loadImage("pics for game/plastic.png");
  
  
  coral_img= loadImage("pics for game/coral.jpg");

  middle_img= loadImage("pics for game/underwater-image.jpg");
  begin_img= loadImage("pics for game/begining.png");
  turtle_img= loadImage("pics for game/turtle.png");


  
}

function setup() {
  createCanvas(1500, 400);
  
  
  
  coral = createSprite(200,180,400,20);
  coral.addImage("corals",coral_img);
  coral.scale = 0.04;
    
  
  
  jellyfish = createSprite(500,140,10,10);
  jellyfish.addImage("jellies",jellyfish_img);
  jellyfish.scale=0.5

  begin = createSprite(300,140,10,10);
  begin.addImage("begining",begin_img);
  begin.scale=1
  
  middle = createSprite(300,140,10,10);
  middle.addImage("underwater",middle_img);
  middle.scale=1
  
  turtle = createSprite(300,140,10,10);
  turtle.addImage("turtles",turtle_img);
  turtle.scale=0.3
  /*
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;*/
}

function draw() {
  background(0,0,0);

  turtle.x=200
  turtle.y=mouseY

  spawnPlastics();

  /*text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    
  
    if(keyDown("space") && trex.y >= 159) {
      jumpSound.play();
      trex.velocityY = -14;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
    
    if (score>0 && score%100 === 0){
      checkPointSound.play();
    }
  
    if(obstaclesGroup.isTouching(trex)){
      dieSound.play();  
      gameState = END;
        
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  */
  
  drawSprites();
}

function spawnPlastics() {
  //write code here to spawn the plastics
  if (frameCount % 250 === 0) {
    plastic = createSprite(1700,100,10,10);
    plastic.addImage("plastics",plastic_img);
    plastic.y = Math.round(random(50,350));
    plastic.scale=0.07
    plastic.velocityX = -4;
    
     //assign lifetime to the variable
    plastic.lifetime = 300;
    
    //adjust the depth
    plastic.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
    
    
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  ground.velocityX = -(6 + 3*score/100);
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  score = 0;
  
}
