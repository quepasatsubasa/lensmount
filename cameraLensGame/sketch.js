var lensPosX = 200;
var lensPosY = 400;
var sensorX = 400;
var speed = 2;
var i = 0;
var x = 0;

function setup() {
  createCanvas(800,800);
}

function draw() {
  createCanvas(1200,800);
  background(0,0,0);
//  stroke(255,255,255);
//  text("Press Any Key to Start the Game", 400, 500);
  
 // if(keyIsPressed == true){
  
  
  drawCamera();
  
  for (var i = 0; i <= width; i = i + 0.05){ 

  drawLens();

  }
  
  
  
  
  } 
  



function drawCamera(){
  stroke(255,255,255);
  sensorX = random(100,700);
  var sensorY = 1000;
  //I kind of made a mistaked and X is Y and Y is X
  line(sensorY, sensorX, sensorY, sensorX-10);
  line(sensorY, sensorX, sensorY, sensorX+10);
  line(sensorY, sensorX-10, sensorY+10, sensorX-10);
  line(sensorY, sensorX+10, sensorY+10,sensorX+10);
  line(sensorY+10, sensorX-10, sensorY+10, sensorX-30);
  line(sensorY+10, sensorX-10, sensorY+10, sensorX+30);
  line(sensorY+10, sensorX-30, sensorY+120, sensorX-30);
  line(sensorY+10, sensorX+30, sensorY+120, sensorX+30);
  line(sensorY+120, sensorX-30, sensorY+120, sensorX+30);
  
  //tripod
  line(sensorY+60, sensorX+30, sensorY+40, sensorX+120);
  line(sensorY+70, sensorX+30, sensorY+70, sensorX+120);
  line(sensorY+80, sensorX+30, sensorY+100, sensorX+120);

}

function drawLens(){
  stroke(255,255,255);
  
  var updown = 0;
  if (keyCode == UP_ARROW) {
    updown -= 0.05;
  } else if (keyCode == DOWN_ARROW){
    updown += 0.05;
  }
  
  if(lensPosX > width){
    lensPosX = 0;
  }
  
  if(lensPosY > 2000 || lensPosY < -1000){
    lensPosY = 400;
    lensPosX = 0;
  }
  
  lensPosY = lensPosY + updown;
  
  fill(255,255,255);
  ellipse (lensPosX, lensPosY, 10, 10);
  lensPosX = lensPosX + 0.05;
  
}







