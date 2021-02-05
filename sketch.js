const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
  tree = loadImage("tree.png");
  boy=loadImage("boy.png");
  bgI = loadImage("bg.png");
  
}
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  
  ground = new Ground(600,590,1200,20)
  mango1 = new Mango(900,200,35);
  mango2 = new Mango(800,350,35);
  stone=new Stone(250,480,20);
  Sling = new slingshot(stone.body,{x:230,y:490})
  mango3 = new Mango(1000,300,35)
  mango4 = new Mango (1100,300,35)
  mango5 = new Mango (1000,150,35)
}

function draw() {
  background(bgI);
Engine.update(engine);
 image(tree,700,100,500,500);
 image(boy,200,430,200,200);
 ground.display();
 mango1.display();
 mango2.display();
 stone.display();
 Sling.display();
 mango3.display();
 mango4.display();
 mango5.display();
 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
 detectcollision(stone,mango5)
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
   Matter.Body.setPosition(stone.body,{x:235,y:420})
    Sling.attach(stone.body)
  }
}

function detectcollision(Astone,Amango){
    var posA=Astone.body.position
    var posB =Amango.body.position
    var distance = dist(posA.x,posA.y,posB.x,posB.y)
    if(distance<=Astone.r+Amango.r){
      Matter.Body.setStatic(Amango.body,false)
    
    }
  }
   