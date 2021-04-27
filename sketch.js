const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , object , object1,ground;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
world = engine.world;
var bounce={
  restitution:1.5
}
object = Bodies.circle(150,100,40,bounce);
World.add(world,object);

object1 = Bodies.rectangle(280,100,20,130,bounce);
World.add(world,object1);
var option={
  isStatic:true

}
ground = Bodies.rectangle(200,390,200,20,option);
World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
 ellipse(object.position.x,object.position.y,40);

 rect(object1.position.x,object1.position.y,20,130);
rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20);
}