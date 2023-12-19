const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var world, engine, objects

function setup() {
  var canvas = createCanvas(1200, 1200);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  sphere1 = new Sphere(200, 200)
  sphere2 = new Sphere(250, 200)
  sphere3 = new Sphere(300, 200)
  sphere4 = new Sphere(350, 200)
  sphere5 = new Sphere(400, 200)

  platform = new Platform(600, 20)
  chain1 = new Chain(sphere1.body, platform.body, -100, 0)
  chain2 = new Chain(sphere2.body, platform.body, -50, 0)
  chain3 = new Chain(sphere3.body, platform.body, 0, 0)
  chain4 = new Chain(sphere4.body, platform.body, 50, 0)
  chain5 = new Chain(sphere5.body, platform.body, 100, 0)

}

function draw() {
  Engine.update(engine);
  background(240);


  chain5.display()
  chain4.display()
  chain3.display()
  chain2.display()
  chain1.display()
  platform.display()
  sphere2.display()
  sphere3.display()
  sphere4.display()
  sphere5.display()
  sphere1.display()
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(sphere1.body, sphere1.body.position, {x: 8, y: 5})
  }
}

