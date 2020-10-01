
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(400,100,450,40);

	bob1 = new Bob(300,350,55);
	bob2 = new Bob(350,350,50);
	bob3 = new Bob(400,350,50);
	bob4 = new Bob(450,350,50);
	bob5 = new Bob(500,350,50);

	rope1 = new Rope(bob1.body,roof1.body,-50*4, 0);
	rope2 = new Rope(bob2.body,roof1.body,-50*2, 0);
	rope3 = new Rope(bob3.body,roof1.body,-50*0, 0);
	rope4 = new Rope(bob4.body,roof1.body,-50*-2, 0);
	rope5 = new Rope(bob5.body,roof1.body,-50*-4, 0);

	Engine.run(engine);
  
}


function draw() {
  background("purple");
  rectMode(CENTER);
  
  Engine.update(engine);
  

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites(); 

}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 




