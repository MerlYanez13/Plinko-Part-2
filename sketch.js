const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particle = [];
var plinko=null;
var divisions = [];
var score=0;
var gamestate="start";
var count=0;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20); 
    for(var i=0;i<=width;i=i+80){
      divisions.push(new Divisions(i,750,10,300));

    }
    for(var i=50;i<=width;i=i+50){
      particle.push(new Particle(i,75));
    }
    for(var i=75;i<=width;i=i+50){
      particle.push(new Particle(i,175));
    }
    for(var i=50;i<=width;i=i+50){
      particle.push(new Particle(i,275));
    }
    for(var i=75;i<=width;i=i+50){
      particle.push(new Particle(i,375));
    }

  
}

function draw() {
  background(0,0,0);  
Engine.update(engine);
textSize(35);
text("Score:"+score,20,40);
fill (255);
text(" 500 ",5,550);
text(" 500 ",80,550);
text(" 500 ",160,550);
text(" 500 ",240,550);
text(" 100 ",320,550);
text(" 100 ",400,550);
text(" 100 ",480,550);
text(" 200 ",560,550);
text(" 200 ",640,550);
text(" 200 ",720,550);
if(gamestate=="end"){
  textSize(100);
  text("Game Over",150,250);

}
ground.display();
for(var i = 0;i<particle.length;i++){
  particle[i].display();
}
for(var i = 0;i<divisions.length;i++){
  divisions[i].display();
}
if(plinko!=null){
  plinko.display();
  if(plinko.body.position.y>700){
      
      if(plinko.body.position.x<300){
        console.log("500")
        score+=500;
      }
      if(plinko.body.position.x>=300&& plinko.body.position<=600){
        console.log("100")
        score+=100;
      }
      if(plinko.body.position.x>600&& plinko.body.position<900){
        console.log("200")
        score+=200;
      }
      plinko=null;
      if(count>=5){
        gamestate="end";
      }
    }
}
}
function mouseReleased(){
  if(gamestate!="end"){
    count++;
    plinko=new Plinko(mouseX,10);
  }
}
