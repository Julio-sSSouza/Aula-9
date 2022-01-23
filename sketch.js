var bloco;
function setup() {
  createCanvas(400,400);
  bloco= createSprite(200, 200, 50, 50)
  bloco.shapeColor="blue"
}

function draw() 
{
  background("red");
drawSprites()
if(keyIsDown(UP_ARROW)){
  bloco.y= bloco.y-3
  background("green")
}
}




