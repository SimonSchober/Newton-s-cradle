class Platform {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,1000,60, options);
        this.width = 1000;
        this.height = 60;
        World.add(world, this.body);
    }
    display(){
        push()

        var pos =this.body.position;
        rectMode(CENTER);
        strokeWeight(8)
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop()
    }
}