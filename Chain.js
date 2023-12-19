class Chain {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {
                x: offsetX,
                y: offsetY

            }
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.chain = Constraint.create(option)
        World.add(world, this.chain)
    }
    display()  {
        push()
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(10)
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY)
        pop()
    }
}
