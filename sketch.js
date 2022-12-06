
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1
var plane
var world
var plane1
var plane2
var plane3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   var plane_options ={
	isStatic: true
  };

	//Crie os Corpos aqui.
	
	plane1 = Bodies.rectangle(300,300,400,20,plane_options);
	World.add(world,plane1);

  plane2 = Bodies.rectangle(300,300,400,20,plane_options);
	World.add(world,plane2);

  plane3 = Bodies.rectangle(300,300,400,20,plane_options);
	World.add(world,plane3);
	
	block1 = Bodies.circle(100,10,20,ball_options);
	World.add(world,block1)

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background(green);

  Matter.Body.rotate(plane1,angle)
  push()
  translate(plane1.position.x,plane1.position.y)
  rotate(angle)
  fill("black")
  rect(0,0,100,20)
  pop()
  
  angle +=0.1

  ellipse(block1.position.x,block1.position.y,20);
  rect(plane1.position.x,plane1.position.y,650,20);  

  Engine.update(engine)

  Matter.Body.rotate(plane2,angle)
  push()
  translate(plane2.position.x,plane2.position.y)
  rotate(angle)
  fill("black")
  rect(0,0,100,20)
  pop()
  
  angle +=0.2

  ellipse(block1.position.x,block1.position.y,20);
  rect(plane2.position.x,plane2.position.y,650,20);  

  Engine.update(engine)

  Matter.Body.rotate(plane3,angle)
  push()
  translate(plane3.position.x,plane3.position.y)
  rotate(angle)
  fill("black")
  rect(0,0,100,20)
  pop()
  
  angle +=0.3

  Engine.update(engine)
  
  ellipse(block1.position.x,block1.position.y,20);
  rect(plane3.position.x,plane3.position.y,650,20);  

  drawSprites();
 
}



