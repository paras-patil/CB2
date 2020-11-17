
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxPosition=width/2+120
	 boxY=480;
	 
	//boxleftSprite=createSprite(boxPosition, boxY, 20,180);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 1,245 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	//boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	//boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	//boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 1,180 , {isStatic:true} );
	World.add(world, boxRightBody);
	 
	bin=createSprite(620,475,20,20);
	bin.addImage("dustbin",binImage);
	


	




	Engine.run(engine);
   
	ground = new Ground(400,650,8000,20)
	ball = new Ball(50,550,69,80)
	ball.scale=0.5;
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball.body,ball.body.position,{x:450,y:-1500});

	}
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);

  text(mouseX+","+mouseY,mouseX,mouseY);

 

  ground.display()
  ball.display()

  drawSprites();
 
}



