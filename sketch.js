const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,650);
  
  engine= Engine.create();
  world= engine.world ;

  ground= new Ground();

  ball= new Ball(650, 200,40);

  box1=new Box(700, 50, 40, 50);
  box2=new Box(700, 100, 40, 50);
  box3=new Box(700, 150, 40, 50);
  box4=new Box(700, 200, 40, 50);
  box5=new Box(700, 250, 40, 50);
  box6=new Box(700, 300, 40, 50);
  box7=new Box(700, 350, 40, 50);
  box8=new Box(700, 400, 40, 50);
  box9=new Box(700, 450, 40, 50);
  box10=new Box(700, 500, 40, 50);
  box11=new Box(700, 550, 40, 50);
  box12=new Box(700, 600, 40, 50);

  box13=new Box(740, 50, 40, 50);
  box14=new Box(740, 100, 40, 50);
  box15=new Box(740, 150, 40, 50);
  box16=new Box(740, 200, 40, 50);
  box17=new Box(740, 250, 40, 50);
  box18=new Box(740, 300, 40, 50);
  box19=new Box(740, 350, 40, 50);
  box20=new Box(740, 400, 40, 50);
  box21=new Box(740, 450, 40, 50);
  box22=new Box(740, 500, 40, 50);
  box23=new Box(740, 550, 40, 50);
  box24=new Box(740, 600, 40, 50);
  
  rope= new Rope(ball.body,{x:520,y:40});
  
}

function draw() {
  background("skyblue");  

  Engine.update(engine);
  ground.display();
  fill("green");

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  fill("purple");
  rope.display();
  ball.display();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}