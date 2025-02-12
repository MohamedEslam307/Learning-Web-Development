class Point3D {
    x;
    y;
    z;
    constructor(x=0, y=0, z=0) {
        //check if the entered are numbers
        if(isNaN(x) || isNaN(y) || isNaN(z)) {
            console.log("Please enter numbers only");
            return;
        }
        this.x=x;
        this.y=y;
        this.z=z;
    }
    print() {
        console.log(`3DPoint: (${this.x}, ${this.y}, ${this.z})\n`);
    }

    calculateDistance(point) {
        return Math.sqrt((this.x - point.x)**2 + (this.y - point.y)**2 + (this.z - point.z)**2);
    }

}