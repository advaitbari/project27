const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var cradle1,cradle2,cradle3, cradle4,cradle5, support1
var chain1,chain2,chain3, chain4,chain5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	supportObject=new support(width/2,height/4,width/7,20);

	cradleDiameter=40;

	startcradlePositionX=width/2;
	startcradlePositionY=height/4+500;
	cradle1=new cradle(startcradlePositionX-cradleDiameter*2,startcradlePositionY,Diameter);
	cradle2=new cradle(startcradlePositionX-cradleDiameter,startcradlePositionY,cradleDiameter);
	cradle3=new cradle(startcradlePositionX,startcradlePositionY,cradleDiameter);
	cradle4=new cradle(startcradlePositionX+cradleDiameter,startcradlePositionY,cradleDiameter);
	cradle5=new cradle(startcradlePositionX+cradleDiameter*2,startcradlePositionY,cradleDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	support1=new support1(cradle1.body,support1.body,-cradleDiameter*2, 0)

	support2=new support(cradle2.body,support1.body,-cradleDiameter*1, 0)
	support3=new support(cradle3.body,support1.body,0, 0)
	support4=new support(cradle4.body,support1.body,cradleDiameter*1, 0)
	support5=new support(cradle5.body,support1.body,cadleDiameter*2, 0)

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  support1.display();

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()	
  cradle1.display();
  cradle2.display();
  cradle3.display();
  cradle4.display();
  cradle5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(cradle11.body,cradle1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	supportBodyPosition=constraint.bodyB.position

	supportBodyOffset=constraint.pointB;
	
	supportBodyX=supportBodyPosition.x+supportBodyOffset.x
	supportBodyY=supportBodyPosition.y+supportBodyOffset.y
	line(supportBodyPosition.x, supportBodyPosition.y, supportBodyX,supportBodyY);
}

