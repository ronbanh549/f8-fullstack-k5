let a = 5;
let b = 10;

console.log("Trước khi hoán vị:");
console.log("a =", a);
console.log("b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("Sau khi hoán vị:");
console.log("a =", a);
console.log("b =", b);
