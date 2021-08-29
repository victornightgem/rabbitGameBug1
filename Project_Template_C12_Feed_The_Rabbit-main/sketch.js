/*var mainTextFont;
var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  mainTextFont = loadFont("ZCOOLKuaiLe-Regular.ttf"); 
}

function setup(){
 
 createCanvas(500,437);
 textFont(mainTextFont);
//garden=createSprite(200,200);
//garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

textSize(30);
text('hEllo', 100,150);

}

function createApples(){

}

function draw() {
background(gardenImg);
  



rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
*/


function setup(){
createCanvas(400,400);
createSprite(200,200,200,200);
text("Hi", 200, 200);
}
function preload(){

}
function draw(){
  
drawSprites();
}