var fr,mr;


function setup() {
  createCanvas(1200,800);

  fr = createSprite(200,200,50,80);
  fr.shapeColor = "yellow";

  fr.debug = true;

  mr = createSprite(400,200,80,30);
  mr.shapeColor = "yellow";
  
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
    fr.shapeColor = "blue";
    mr.shapeColor = "blue";
  }
  else{
    fr.shapeColor = "yellow";
    mr.shapeColor = "yellow";
  }
  drawSprites();
}