let nilai = prompt ("Cek Konversi Nilai Anda Disini : ");

if (nilai < 20) {
    alert ("Anda Mendapat Nilai : E");
} else if (nilai <= 40) {
    alert ("Anda Mendapat Nilai : D");
} else if (nilai <= 60) {
    alert ("Anda Mendapat Nilai : C");
} else if (nilai <= 80) {
    alert ("Anda Mendapat Nilai : B");
} else if (nilai <=100) {
    alert ("Anda Mendapat Nilai : A, Selamat!");
} else {
    alert ("Nilai yang Anda Input Tidak Valid. Mohon Masukkan Nilai Antara 0 - 100");
}