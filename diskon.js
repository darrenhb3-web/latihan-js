// 1. simpan total belanja
const belanja = 175000
let diskon = 0
// 2. tentukan persen diskon dari besar belanja
if (belanja >= 250000) {
    diskon = 0.2
}
else if (belanja >= 100000) {
    diskon = 0.1
}
else {
    diskon = 0
}

const bayar = belanja - (diskon * belanja)
// 3. hitung potongan = belanja x persen / 100
console.log(bayar)
console.log(diskon)
// 4. tampilkan total bayar