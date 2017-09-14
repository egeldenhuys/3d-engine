class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toString() {
        return 'P(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    }

    // result = point1 - point2
    static subtract(point1, point2) {
        return new Point(point1.x - point2.x, point1.y - point2.y, point1.z - point2.z);
    }

    static multiplyScalar(point, scalar) {
        return new Point(point.x * scalar, point.y * scalar, point.z * scalar);
    }

    static getDirPointer(point1, point2) {
        return new Point(Point.subtract(point1, point2));
    }

    // http://tutorial.math.lamar.edu/Classes/CalcII/CrossProduct.aspx
    static crossProduct(point1, point2) {
        return new Point(point1.y * point2.z - point1.z * point2.y,
                        point1.z * point2.x - point1.x * point2.z,
                        point1.x * point2.y - point1.y * point2.x);
    }
}
