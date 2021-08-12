class Cubelet{
    constructor(x,y,z,sideLength){
        this.pos = createVector(x, y, z);
        this.len = sideLength;
    }

    show(){
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        box(this.len,this.len,this.len)
        pop()
    }
}