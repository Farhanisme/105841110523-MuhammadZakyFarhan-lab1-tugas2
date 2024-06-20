/*
1. Buatlah fungsi yang mengembalikkan nilai bertipe integer
input a: 5              
input b: 2
operasi aritmatika
output: 3

2 Buatlah fungsi yang mengembalikkan nilai boolean
input a: true
input b: false
operasi logika
output: true

3 Buatlah fungsi yang mengembalikkan nilai bertipe string
input a: "Nama Depan" 
input b: "Nama Belakang"
operasi aritmatika
output: "Nama Depan Nama Belakang"

4 Buatlah fungsi yang mengembalikkan nilai bertipe boolean
input a: 5
input b: '5'
menggunakan operator
output: true
    
5 Buatlah fungsi yang mengembalikkan nilai bertipe boolean
input a: 5
input b: '5'
menggunakan operator
output: false
*/

// 1. Fungsi yang mengembalikkan nilai bertipe integer -> operator aritmatika
function operasiAritmatika(a, b) {
    return a - b;
}

// 2. Fungsi yang mengembalikkan nilai boolean -> operator logika
function operasiLogika(a, b) {
    return a || b;
}

// 3. Fungsi yang mengembalikkan nilai bertipe string -> operator aritmatika
function gabungString(a, b) {
    return a + " " + b;
}

// 4. Fungsi yang mengembalikkan nilai bertipe boolean -> operator komparasi
function perbandingan(a, b) {
    return a == b;
}

// 5. Fungsi yang mengembalikkan nilai bertipe boolean -> operator komparasi
function perbandinganTipe(a, b) {
    return a === b;
}

// Panggil fungsinya
window.onload = function () {
    document.getElementById("jawaban1").innerHTML += operasiAritmatika(5, 2);
    document.getElementById("jawaban2").innerHTML += operasiLogika(true, false);
    document.getElementById("jawaban3").innerHTML += gabungString("JOKO", "WIDODO");
    document.getElementById("jawaban4").innerHTML += perbandingan(5, '5');
    document.getElementById("jawaban5").innerHTML += perbandinganTipe(5, '5');
}
