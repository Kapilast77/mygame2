var bg,bgimg;
var player,shooterimg,shootingimg;
var zombie,zombieimg;
var heart1,heart2,heart3;
var heart1img,heart2img,heart3img;

function preload(){
bgimg=loadImage("./assets/bg.jpeg");
shooterimg=loadImage("./assets/shooter_2.png");
shootingimg=loadImage("./assets/shooter_3.png");
zombieimg=loadImage("./assets/zombie.png");
heart1img=loadImage("./assets/heart_1.png");
heart2img=loadImage("./assets/heart_2.png");
heart3img=loadImage("./assets/heart_3.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgimg);
bg.scale=1.0
player=createSprite(displayWidth-1100,displayHeight-300,50,50);
player.addImage(shooterimg);
player.scale=0.5
player.debug=true;
player.setCollider("rectangle",0,0,200,300);
zombieGroup=new Group();
heart1=createSprite(displayWidth-150,40,20,20);
heart1.addImage(heart1img);
heart1.scale=0.4
heart1.visible=false;
heart2=createSprite(displayWidth-100,40,20,20);
heart2.addImage(heart2img);
heart2.scale=0.4
heart2.visible=false;
heart3=createSprite(displayWidth-150,40,20,20);
heart3.addImage(heart3img);
heart3.scale=0.4
} 

function draw(){
  background(0)
  if (keyDown("UP_ARROW")||touches.length>0) {
    player.y=player.y-30;
  }
  if (keyDown("DOWN_ARROW")||touches.length>0) {
    player.y=player.y+30;
  }
  if (keyWentDown("space")) {
  player.addImage(shootingimg);
    
  } else  if(keyWentUp("space")){
  player.addImage(shooterimg);    
  }
  if (zombieGroup.isTouching(player)) {
    for (var i = 0; i < zombieGroup.length; i++) {
      if (zombieGroup.isTouching(player)){
        zombieGroup[i].destroy()
      }
    }
  }
  enemy();
drawSprites();
}
function enemy(){
  if (frameCount%60===0) {
    zombie=createSprite(random(windowWidth-250,1100),random(100,500),40,40)
    zombie.addImage(zombieimg);
    zombie.velocityX=-3;
    zombie.scale=0.25;
    zombie.lifetime=350;
    zombieGroup.add(zombie);
    zombie.debug=true;
    zombie.setCollider("rectangle",0,0,400,400);
  }
}