const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,box,boxOptions,box2,box2Options, ground, groundOptions, ball1, ball1Options
var ball2,ball2Options
function setup(){
   createCanvas(400,400);

   engine = Engine.create()
   world = engine.world

    boxOptions = {
        isStatic:false,
        restitution:1
    }
    box = Bodies.rectangle(200,200,100,100,boxOptions)
    World.add(world,box)

    box2Options = {
        isStatic:true
    }
    box2 = Bodies.rectangle(300,100,50,50,box2Options)
    World.add(world,box2)


    ball1Options = {
        isStatic:false,
        restitution:0.5
    }
    ball1 = Bodies.circle(100,50,20,ball1Options)
    World.add(world,ball1)

    ball2Options = {
        isStatic:false,
        restitution:1
    }
    ball2 = Bodies.circle(80,50,20,ball2Options)
    World.add(world,ball2)


    groundOptions = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,370,400,20,groundOptions)
    World.add(world,ground)
}

function draw(){
    background("black");
    Engine.update(engine)

    rectMode(CENTER)
    rect(box.position.x,box.position.y,100,100)
    rect(box2.position.x,box2.position.y,50,50)
    rect(ground.position.x,ground.position.y,400,20)
    ellipseMode(RADIUS)
    ellipse(ball1.position.x,ball1.position.y,20,20)
    ellipse(ball2.position.x,ball2.position.y,20,20)
}