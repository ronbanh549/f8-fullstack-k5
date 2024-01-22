let a = 10;
let b = 5;
let c = 15;
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
console.log("Các số sau khi sắp xếp là: " + a + ", " + b + ", " + c);
