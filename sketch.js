
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObj
var leftSide, bottom, rightSide
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObj = new Paper(90,200,40)
    groundObj = new Ground(500,700,1000,40)
	
	leftSide = new Dustbin(550,620,20,100)
	bottom = new Dustbin(610,660,100,20)
	rightSide = new Dustbin(670,620,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObj.display()
  groundObj.display()
  leftSide.display()
  bottom.display()
  rightSide.display()
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:15,y:-45})
	}
}


