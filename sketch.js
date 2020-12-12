
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  var particles = [];
  var plinkos = [];
  var divisions = [];
  var divisionHeight = 300;
  var particle;
  var score = 0;

  for(var k = 0; k<=innerWidth; k=k+80){
    divisions.push(new Divisions(k,height.divisionHeight/2,10,divisionHeight));

  }

  for (var j = 40;j<=width; j=j+50)
  {
    plinkos.push(new plinkos(j,75));
  }
  for(var j = 15;<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));

  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
if(particle.body.position.x>300)
{
  score=score+500;
  particle=null;
  if(count>=5) gameState = "end";
}
    }
  }

  for(var k = 0 ; k<divisions.length;k++){
    divisions[k].display();
  }
  
  drawSprites();
 
}

function mousePressed()
{
  if(gameState!=="end"){
    score++;
    particle=new Particle(mouseX,10,10,10);
  }
}



