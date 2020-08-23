var monkey,monkeyImage,obstacle,obstacleImage,ObstacleGroup,jungle,jungleImage,invisibleGround,bananaImage,score,foodGroup;

function preload() {
monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungleImage = loadImage("jungle2.png");
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
                          }




function setup() {
  createCanvas(400, 400);
  monkey = createSprite(50,300,10,10);
  monkey = addAnimation(monkeyImage);
  monkey.scale = 0.2;
  jungle = createSprite(200,200,400,400);
  jungle = addImage(jungleImage);
  jungle.x=jungle.width/2;
  jungle.velocityX = -4;
  invisibleGround = createSprite(200,320,200,200);
  invisibleGround.visible = false;
}







function draw() {
  background(220);
        if (ground.x < 0){
          ground.x = ground.width/2;
      }
  monkey.collide(invisibleGround);
  if(keyDown("space")) {
        monkey.velocityY = -10;
       } 
monkey.velocityY = monkey.velocityY + 0.8
  if(foodGroup.isTouching(monkey)){
    score = score+2;
     }
  if(ObstacleGroup.isTouching(monkey)){
     player.scale = 0.02;
     }
  switch(score){
    case 10: monkey.scale  = 0.12
      break;
      case 20: monkey.scale  = 0.14
      break;
      case 30: monkey.scale  = 0.16
      break;
      case 40: monkey.scale  = 0.18
      break;
      
      
      
  }
  drawSprites();
}
function spawnBananas() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(400,165,10,40);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.y = random(150,250);    
   banana.scale = 0.5;
   banana.lifetime = 300;
    //add each obstacle to the group
    foodGroup.add(banana);
  }
}
function spawnObstacles() {
  if(frameCount % 150 === 0) {
    obstacle = createSprite(400,165,10,40);
    obstacle = addImage(obstacleImage);
    obstacle.velocityX = -4;     
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    ObstacleGroup.add(obstacle);
  }
}