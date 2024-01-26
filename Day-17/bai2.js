var kWh, tien, bac;

if (kWh <= 50) {
    bac = 1;
} else if (kWh <= 100) {
    bac = 2;
} else if (kWh <= 200) {
    bac = 3;
} else if (kWh <= 300) {
    bac = 4;
} else if (kWh <= 400) {
    bac = 5;
} else {
    bac = 6;
}

switch (bac) {
    case 1:
        tien = kWh * 1.678;
        break;
    case 2:
        tien = 50 * 1.678 + (kWh - 50) * 1.734;
        break;
    case 3:
        tien = 50 * 1.678 + 50 * 1.734 + (kWh - 100) * 2.014;
        break;
    case 4:
        tien = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kWh - 200) * 2.536;
        break;
    case 5:
        tien =
            50 * 1.678 +
            50 * 1.734 +
            100 * 2.014 +
            100 * 2.536 +
            (kWh - 300) * 2.834;
        break;
    case 6:
        tien =
            50 * 1.678 +
            50 * 1.734 +
            100 * 2.014 +
            100 * 2.536 +
            100 * 2.834 +
            (kWh - 400) * 2.927;
        break;
}
