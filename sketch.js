var fr,mr;

function setup() {
  createCanvas(800,400);
  
  fr = createSprite(200,200,40,80);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(400,200,80,40);
  mr.shapeColor = "green";
  mr.debug = true;
}

function draw() {
  background(255,255,255);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x - fr.x < fr.width/2 + mr.width/2 
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2){
    mr.shapeColor = "yellow";
    fr.shapeColor = "yellow";
  }
  else{
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }

  drawSprites();
}

