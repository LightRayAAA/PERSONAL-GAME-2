class Blaster{

constructor(a,b,c,d){

var options = {

isStatic: false,
restitution: 0.5
}
this.x = a;
this.y = b;
this.width = c;
this.height = d;

this.body = Bodies.rectangle(a, b, c, d, options)
this.image = loadImage("images/blaster.png")
World.add(world, this.body)
}

display(){
var pos = this.body.position
push()
translate(pos.x, pos.y)
image(this.image, 0, 0, this.width, this.height)
pop()
}
}