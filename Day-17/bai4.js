function kiemTra(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Sử dụng hàm
let num = 69; // Thay đổi giá trị của num tùy ý
if (kiemTra(num)) {
    console.log(num + " là số nguyên tố.");
} else {
    console.log(num + " không phải là số nguyên tố.");
}
