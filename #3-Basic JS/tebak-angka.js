alert(
    "Selamat Datang di Game - TEBAK ANGKA. Kalian akan bermain dalam 5 rounde. Disetiap rounde kalian harus memilih Angka '1 - 3'. Pemain dengan jumlah tebakan benar terbanyak akan menjadi pemenang. SELAMAT BERMAIN"
);

let ronde = 1;
let skorPlayer1 = 0;
let skorPlayer2 = 0;


function bilRandom (){
    let acak = Math.random();
    acak = (acak<=0.35)?'1':(acak<=0.7)?'2':'3';
    return acak;
}

function validasi (inputP1, inputP2) {
    if (inputP1 === inputP2) {
        alert("Angka yang dimasukkan tidak boleh sama");
        return false;
    }
    if (inputP1 < 1 || inputP2 < 1) {
        alert("Angka yang dimasukkan tidak boleh kurang dari 1");
        return false;
    }
    if (inputP2 > 3 || inputP2 > 3) {
        alert("Angka yang dimasukkan tidak boleh lebih dari 3");
        return false;
    }
    if (!Number.isInteger(inputP1) || !Number.isInteger(inputP2)) {
        alert("Angka yang dimasukkan tidak boleh 'koma', Harus 1 atau 2 atau 3");
        return false;
    }
    return true;
    
}

function updateSkor () {
    if (skorPlayer1 < skorPlayer2) {
        alert(`
        Player 1 = ${skorPlayer1} Poin.
        Player 2 = ${skorPlayer2} Poin.
        Selamat, Player 2 Memenangkan Pertandingan`);
        ulang = false;
    }
    else if (skorPlayer1 > skorPlayer2) {
        alert(`
        Player 1 = ${skorPlayer1} Poin.
        Player 2 = ${skorPlayer2} Poin.
        Selamat, Player 1 Memenangkan Pertandingan`);
        ulang = false;
    } else {
        alert(`
        Player 1 = ${skorPlayer1} Poin.
        Player 2 = ${skorPlayer2} Poin.
        Hasil Pertandingan Seri`);
        ulang = confirm("Mau Bermain Lagi?");
    }

}


let ulang = true;
while (ulang) {
    let playerPertama = prompt("Player 1 - Silahkan Masukkan Angka:");
    let playerKedua = prompt("Player 2 - Silahkan Masukkan Angka:");
    let comp = bilRandom();
    let valid = validasi(playerPertama, playerKedua);
    if (valid===false) {
        ulang = confirm("Diulang Lagi ya...");
    }
    else {
        if (playerPertama !== comp && playerKedua !== comp) {
            alert(`Tebakannya tidak ada yang Benar. Angka yang dicari adalah ${comp}`);
        } else if (playerPertama === comp) {
            alert(`Player 1 Tebakannya Benar. Angka yang dicari adalah ${comp}`);
            skorPlayer1++;
        } else if (playerKedua === comp) {
            alert(`Player 2 Tebakannya Benar. Angka yang dicari adalah ${comp}`);
            skorPlayer2++;
        }
        alert(`Skor Saat ini => Skor Player 1 = ${skorPlayer1} |###| Skor Player 2 = ${skorPlayer2}`);

        ronde++;
        if (ronde <= 5){
             ulang = confirm(`Mau lanjut ke ronde ${ronde} ?`);
        } else {
            updateSkor();
        }
    }
   
}

// console.log(validasi(1,1));