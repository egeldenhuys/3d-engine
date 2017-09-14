
function main() {
    let a = new Point(0.5, 0.5, 1000000);
    let b = new Point(0.5, 0.5, -1000000);
    let l1 = new Line(a, b);

    let c = new Point(0, 1, 1);
    let d = new Point(1, 0, 0);
    let l2 = new Line(c, d);

    console.log(Line.getIntersection(l1, l2));

    let plane = new Plane(1, 2, 3);
}

main();
