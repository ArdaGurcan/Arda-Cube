let c;
const dimensions = 3;
let rubik = [];

function setup() {
    createCanvas(400, 400, WEBGL)
    c = new Cubelet(0, 0, 0, 200)
    for (let x = 0; x < dimensions; x++) {
        for (let y = 0; y < dimensions; y++) {
            for (let z = 0; z < dimensions; z++) {
                
            }
        }   
    }
}

function draw() {

    c.show()


}