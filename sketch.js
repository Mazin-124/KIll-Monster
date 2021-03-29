const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;
var fly;
var bg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
function preload() {
//preload the images here
  bg = loadImage("images/bg.jpg")
}

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(580,380,600,30);
  hero = new Hero(200,50,180);

  block1 = new Block(300,370,20,20)
  block2 = new Block(300,360,20,20)
  block3 = new Block(300,350,20,20)
  block4 = new Block(300,340,20,20)
  block5 = new Block(300,330,20,20)

  block6 = new Block(320,370,20,20)
  block7 = new Block(320,360,20,20)
  block8 = new Block(320,350,20,20)
  block9 = new Block(320,340,20,20)
  block10 = new Block(320,330,20,20)
}

function draw() {
  background(bg);
  Engine.update(engine)
  ground.display();
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX , y:mouseY});
}
