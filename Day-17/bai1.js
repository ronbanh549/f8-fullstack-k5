var km, fee;

if (km <= 1 && km > 0) {
    fee = km * 15000;
} else if (km <= 5) {
    fee = km * 13500;
} else {
    fee = km * 11000;
}
if (km > 120) {
    fee = fee * 0.9;
}
