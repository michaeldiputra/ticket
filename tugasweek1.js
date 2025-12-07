console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
let penjaga = [{ nama: "Judy Hoops", lari: 3 }, { nama: "Nick Wilde", lari: 2 }];
console.log("");

// menampilkan jarak lari awal
console.log("Jarak lari per hari:");
console.log(penjaga[0].nama + ": " + penjaga[0].lari + " km");
console.log(penjaga[1].nama + ": " + penjaga[1].lari + " km");
console.log("");

// pengulangan jarak lari selama 5 hari
for (let i = 0; i < 5; i++) {
    console.log("Hari " + (i + 1) + ":");
    for (let j = 0; j < penjaga.length; j++) {
        let namaPenjaga = penjaga[j].nama;
        let lariPenjaga = penjaga[j].lari;
        console.log("- ", namaPenjaga, "lari", lariPenjaga, "km");
    }
    // menghitung total jarak lari setiap penjaga setelah 5 hari
    var totalLariPenjaga1 = penjaga[0].lari * (i + 1);
    var totalLariPenjaga2 = penjaga[1].lari * (i + 1);
    console.log("");
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(penjaga[0].nama + ":", totalLariPenjaga1, "km");
console.log(penjaga[1].nama + ":", totalLariPenjaga2, "km");