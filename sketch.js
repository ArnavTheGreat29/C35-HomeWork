var balloon;
var database;
var balloonImg,bgImg;

function preload(){
  balloonImg = loadImage("image/Hot Air Ballon-02.png")
bgImg = loadImage("image/Hot Air Ballon-01.png")

}
function setup() {
  createCanvas(500,500);
  database = firebase.database()
  balloon = createSprite(400, 200, 50, 50);
  database.ref('balloon/position').on("value",(data) =>{
    position = data.val()
    balloon.x = position.x
    balloon.y = position.y
    } )
}

function draw() {
  background(bgImg);  
  balloon.addImage(balloonImg)
  balloon.scale = 0.5
  if(keyDown(LEFT_ARROW)){
    moveBalloon(-10,0);
}
else if(keyDown(RIGHT_ARROW)){
    moveBalloon(10,0);
}
else if(keyDown(UP_ARROW)){
    moveBalloon(0,-10);
}
else if(keyDown(DOWN_ARROW)){
    moveBalloon(0,+10);
}
  drawSprites();
}
function moveBalloon(x,y){
  database.ref('balloon/position').update({x: position.x + x , y: position.y + y})
}