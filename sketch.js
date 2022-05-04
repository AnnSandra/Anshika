var bg,bgimg 
var boy,boyimg
var sweetimg,chocolateimg;
var sweet,chocolate;
var score;

function preload(){
bgimg=loadImage("background.png");
sweetimg=loadImage("sweet.png");
chocolateimg=loadImage("chocolate.png");
boyimg=loadAnimation("Running-1.png","Running-2.png");
}

function setup() {
createCanvas(400,400);


bg=createSprite(300,200,400,20);
bg.addImage(bgimg);
bg.velocityX=-3;

boy=createSprite(50,320,20,20);
boy.addAnimation("run",boyimg);
boy.scale=0.5

sweet=createSprite(500,300)
sweet.addImage(sweetimg);
sweet.scale = 0.1

chocolate=createSprite(300,300)
chocolate.addImage(chocolateimg)
chocolate.scale = 0.2
}

function draw() {

    background(0)
   
    text("score: "+ score, 500,50);
    
    
    
    
    

if(bg.x<100){
bg.x=width/2
}



 drawSprites()
}