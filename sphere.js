class Sphere {
    constructor(x, y) {
        var option = {
            restitution: 1
        }
        this.body = Bodies.circle(x, y, 25, option)
        World.add(world, this.body)
    }
   display() {
    var posi = this.body.position
    push()
    translate(posi.x, posi.y)
    strokeWeight(5)
    ellipse(0,0, 50, 50)
    ellipseMode(RADIUS)
    fill("grey")
    pop()
   }
}