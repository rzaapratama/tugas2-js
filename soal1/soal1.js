const prompt = require("prompt-sync")();

function akarPangkatDua(x) {
  if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    return Math.sqrt(x);
  }
}

try {
  var angka = parseInt(prompt("Masukkan bilangan genap: "));
  var hasil = akarPangkatDua(angka);
  console.log("Akar pangkat dua dari", angka, "adalah:", hasil);
} catch (error) {
  console.log(error);
}
