class Hero{
    constructor(x,y,r){ 
        var options = {
            frictionAir: 1,
            density:1
        }
    this.x = x;
    this.y = y;
    this.r =r;
        this.image = loadImage("images/flying-superman-png-2.png")
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("black");
        
       image(this.image,0,0,this.r,this.r);
        pop();
    }
}