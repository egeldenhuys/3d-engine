class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this.dirPointer = Point.getDirPointer(point1, point2);
    }


    static getIntersection(line1, line2) {
        // Interect if there is a t and r that give the same x, y and z

        // A + (B - A)t
        //      <Ax + (Bx - Ax)t> = <Cx + (Dx - Cx)r>
        //      X1 = Ax + tBx - tAx
        //      X2 = Cx + rDx - rCx
        //      X1 = X2 for some t and r

/*
    (Bx - Ax)t - (Dx - Cx)r = Cx - Ax
    (By - Ay)t - (Dy - Cy)r = Cy - Ay
    (Bz - Az)t - (Dz - Cz)r = Cz - Az
*/
    let ax = line1.point1.x;
    let ay = line1.point1.y;
    let az = line1.point1.z;

    let bx = line1.point2.x;
    let by = line1.point2.y;
    let bz = line1.point2.z;

    let cx = line2.point1.x;
    let cy = line2.point1.y;
    let cz = line2.point1.z;

    let dx = line2.point2.x;
    let dy = line2.point2.y;
    let dz = line2.point2.z;

    let res = Linear.solve([[(bx-ax), (dx-cx)], [(by-ay), (dy-cy)], [(bz-az), (dz-cz)]],
    [cx-ax, cy-ay, cz-az]);

    return res;
    }

    toString() {
        let a = this.point1.toString();
        let b = this.point1.toString();

        return "L[" + a + ", " + b + "]";
    }

}
