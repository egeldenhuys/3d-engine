class Plane {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;

        this.normal = getNormal();
        this.d = getD();
    }

    // http://www.math.cornell.edu/~froh/231f08e1a.pdf
    getNormal() {
        // Calculate two direction vectors
        let p = Point.subtract(this.point1, this.point2);
        let p1 = Point.subtract(this.point1, this.point3);
        return Point.crossProduct(p, p1);
    }

    getD() {
        return this.normal.x * this.point1.x + this.normal.y * this.point1.y + this.normal.z * this.point1.z;
    }

    getIntersectionWithLine(line) {
        
    }

}
