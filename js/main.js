/* Calculate canvas width/height */
var stageWidth  = window.innerWidth-26,
    stageHeight = window.innerHeight-26;

/* Create Matter.js engine */
var engine = Matter.Engine.create(document.body, {
    render: {
        options: {
            width: stageWidth,
            height: stageHeight,
            wireframes: false,
            background: "img/resized/280zx.jpg"
        }
    }
});

/* Engine Settings */
engine.world.gravity.y = 0.1;
engine.world.bounds.min.x = 0;
engine.world.bounds.min.y = 0;
engine.world.bounds.max.x = stageWidth;
engine.world.bounds.max.y = stageHeight;

/* Enable mouse control */
var mouseConstraint = Matter.MouseConstraint.create(engine);
Matter.World.add(engine.world, mouseConstraint);

/* Add some walls */
var wallThickness = 10,
wallOptions = {
    isStatic: true,
    render: {
        visible: true
    }
};
Matter.World.add(engine.world, [
    Matter.Bodies.rectangle(wallThickness/2, stageHeight/2, wallThickness, stageHeight, wallOptions), // left
    Matter.Bodies.rectangle(stageWidth - (wallThickness/2), stageHeight/2, wallThickness, stageHeight, wallOptions), // right
    Matter.Bodies.rectangle(stageWidth/2, stageHeight - (wallThickness/2), stageWidth, wallThickness, wallOptions), // bottom
    Matter.Bodies.rectangle(0, 0, stageWidth*2, wallThickness, wallOptions) // top
]);

/* Create some bodies! */
var cube = Matter.Bodies.rectangle(400, 200, 80, 80, {
    friction: 0, restitution: 1,
    render: {
        fillStyle: "red",
        strokeStyle: "blue",
        lineWidth: 3
    }
});
var miniKyle = Matter.Bodies.circle(200, 100, 200, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/mini-kyle.png" }}
});
var watch = Matter.Bodies.rectangle(150, 120, 125, 151, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/watch.png" }}
});
var chip = Matter.Bodies.rectangle(410, 150, 200, 252, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/chip.png" }}
});
var shoe = Matter.Bodies.rectangle(300, 200, 125, 83, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/shoe.png" }}
});
var arduino = Matter.Bodies.rectangle(410, 100, 175, 138, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/Arduino.png" }}
});
var rubiks = Matter.Bodies.rectangle(250, 110, 115, 115, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/rubiks.png" }}
});
var punch = Matter.Bodies.rectangle(350, 110, 150, 275, {
    friction: 0, restitution: 1,
    render: {sprite: { texture: "img/resized/punch.png" }}
});

var objects = [cube, miniKyle, watch, chip, shoe, arduino, rubiks, punch];

/* Add all of the bodies to the World */
Matter.World.add(engine.world, objects);

/* Start the simulation */
Matter.Engine.run(engine);

/* Randomly generate force every 500ms */
setInterval(function() {
    //engine.world.gravity.y = Math.random();
    for (var i = 0; i < objects.length; i++) {
        Matter.Body.applyForce(objects[i], {x:0,y:0}, {x:0,y:.5});
    }
}, 500);

setInterval(function() {
    cube.render.fillStyle = ("#"+((1<<24)*Math.random()|0).toString(16));
}, 100);
