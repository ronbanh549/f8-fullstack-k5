let a = 5;
let b = -3;

if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    console.log("Hai số " + a + " và " + b + " có cùng dấu");
} else if (a === 0 || b === 0) {
    console.log("Hai số " + a + " và " + b + " có một số bằng 0");
} else {
    console.log("Hai số " + a + " và " + b + " khác dấu");
}
