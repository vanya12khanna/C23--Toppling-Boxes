
// Renaming/(Alias) the modules of the library  -- NameSpacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

// Declaring a variable engine to hold the engine object
var engine,world;
var ground;
var box1,box2;



function setup() {
  createCanvas(800,400);
  
  // Creating engine from create method/function of  Matter.Engine module
  engine = Engine.create();
  world= engine.world;

  //console.log(engine);

  // JSON -- Java script object notation

  ground = new Ground(400,380,800,20);
  box1 = new Box(420,200,50,50);
  box2 = new Box(400,100,50,100);
 
}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  

  ground.display();
  box1.display();
  box2.display();
 
  
  
}