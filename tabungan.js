let saldo = 50000
let minggu = 0
const target = 200000

while (saldo < target) {
    saldo = saldo + 25000

    minggu = minggu + 1
    console.log("Saldo Sekarang" + saldo)
    console.log("Minggu-ke :" + minggu)
}
console.log("Saldo akhir: Rp" + saldo);
console.log("Total minggu: " + minggu);