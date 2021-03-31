const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World 

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var options = {
    isStatic:true,
  }
  ground = Bodies.rectangle(200,390,400,10,options)
  var options = {
    restitution:1.25
    }
  ball = Bodies.circle(200,200,30,options)
  
  World.add(world,ground);
  World.add(world,ball);
  }

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)

  
}