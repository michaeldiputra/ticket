console.log("--- Tiket Masuk Zoo ---");
let pengunjung = [{nama: "Judy", umur: 4}, {nama: "joko", umur: 35}, {nama: "sela", umur: 65}, {nama: "zell", umur: 10}];

// mememtukan harga tiket normal
let hargaTiket = 50000;

// looping
for (let i = 0; i < pengunjung.length; i++) {
    let namaPengunjung = pengunjung[i].nama;
    let umurPengunjung = pengunjung[i].umur;
    let pesan = "";
    
    // percabangan
    if (umurPengunjung < 5){
        pesan = "Free! untuk balita";
    }else if (umurPengunjung <= 12){
        pesan = "Diskon 50% harga tiket: " + (hargaTiket * 0.5);
    }else if (umurPengunjung >= 60){
        pesan = "Diskon 30% harga tiket: " + (hargaTiket * 0.7);
    }else{
        pesan = "Harga tiket normal: " + hargaTiket;
    }

    console.log ("Nama Pengunjung   :", namaPengunjung);
    console.log ("Umur              :", umurPengunjung, "Tahun" );
    console.log ("Keterangan        :", pesan);

}
