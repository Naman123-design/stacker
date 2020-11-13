const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagonImg;
var hexagon1;
var hexagon2;
var hexagon3;
var hexagon4;
var hexagon5;
var gr;
var shelf;

function preload(){
    hexagonImg = loadImage("hex.png")
}

function setup(){
createCanvas(800,800)

engine = Engine.create();
world = engine.world;

hexagon1 = new Hexagon(200,100,80,80);
hexagon2 = new Hexagon(300,100,70,70);
hexagon3 = new Hexagon(400,100,60,60);
hexagon4 = new Hexagon(500,100,50,50);
hexagon5 = new Hexagon(600,100,40,40);
gr = new Ground(400,750,800,10);
shelf = new Ground(450,130,650,5);
}

function draw(){
        background(200)
    Engine.update(engine);

hexagon1.display();
hexagon2.display();
hexagon3.display();
hexagon4.display();
hexagon5.display();
gr.display();
shelf.display();
}

function mouseDragged(){
if(keyDown("1")){
Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}
if(keyDown("2")){
Matter.Body.setPosition(hexagon2.body, {x: mouseX , y: mouseY});
}
if(keyDown("3")){
Matter.Body.setPosition(hexagon3.body, {x: mouseX , y: mouseY});
}
if(keyDown("4")){
Matter.Body.setPosition(hexagon4.body, {x: mouseX , y: mouseY});
}
if(keyDown("5")){
Matter.Body.setPosition(hexagon5.body, {x: mouseX , y: mouseY});
}
}