function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(400,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke(255,100,100);
  noFill();
  scAngle = map(sc,0,60,0,360),
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(scAngle);
  stroke(255,100,100);
  line(0,0,100,0);
  pop();


  strokeWeight(8);
  stroke(150,100,255);
  mnAngle = map(mn,0,60,0,360),
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(mnAngle);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  
  strokeWeight(8);
  stroke(150,255,100);
  hrAngle = map(hr % 12,0,12,0,360),
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();

  
  drawSprites();
}