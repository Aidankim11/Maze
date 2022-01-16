var lives=3
var gameState="start"

function preload(){
  resetImg=loadImage("resetbutton.png")
}

function setup() {
  createCanvas(800,400);
  ball=createSprite(30, 30, 20, 20);
  ball.shapeColor="blue"
  target = createSprite(780, 350, 50,100)
  target.shapeColor="red"
  wall1=createSprite(80,30,10,60)
  wall2=createSprite(30,110,80,10)
  wall3=createSprite(70,255,10,290)
  wall4=createSprite(165,210,180,10)
  wall5=createSprite(440, 60,720,10)
  wall6=createSprite(140, 155,10,100)
  wall7=createSprite(300, 110,310,10)
  wall8=createSprite(665, 110,310,10)
  wall9=createSprite(500, 160,600,10)
  wall10=createSprite(380, 250,10,190)
  wall11=createSprite(180, 290,10,150)
  wall12=createSprite(305, 255,150,10)
  wall13=createSprite(250, 300,150,10)
  wall14=createSprite(300, 340,150,10)
  wall15=createSprite(440, 310,10,200)
  wall16=createSprite(650, 210,300,10)
  wall17=createSprite(600, 280,10,140)
  wall18=createSprite(490, 255,100,10)
  edges=createEdgeSprites()
reset=createSprite(400,240,10,10)
reset.addImage(resetImg)
reset.visible=false
}

function draw() {
  background("green"); 
  fill("orange")
  text("Lives: "+lives,700,40) 
  if(gameState==="start"){

  
  ball.velocityX=0
  ball.velocityY=0
  if(keyDown("up")){
    ball.velocityY=-4
    ball.velocityX=0
  }
  
  if(keyDown("down")){
    ball.velocityY=4
    ball.velocityX=0
  }

  if(keyDown("left")){
    ball.velocityY=0
    ball.velocityX=-4
  }
  
  if(keyDown("right")){
    ball.velocityY=0
    ball.velocityX=4
  }

  ball.collide(edges)
if(ball.isTouching(wall1)||ball.isTouching(wall2)
||ball.isTouching(wall3)||ball.isTouching(wall4)||
ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)
||ball.isTouching(wall9)||ball.isTouching(wall10)||
ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)
||ball.isTouching(wall15)||ball.isTouching(wall16)||
ball.isTouching(wall17)||ball.isTouching(wall18)){
  ball.x=30
  ball.y=30
  lives=lives-1
}
if(lives<=0){
  gameState="end"
}

if(ball.isTouching(target)){
  gameState="won"
}
  
  }
  
if(gameState==="end"){
  textSize(35)
  text("Game Over",300,150)
reset.visible=true
reset.scale=0.3
ball.destroy()
if(mousePressedOver(reset)){
  location.reload()
}

}

if(gameState==="won"){
  textSize(35)
  text("You Won!!!!",300,150)
}
  drawSprites();
}