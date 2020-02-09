const pertama = document.getElementById("pertama")
const kedua = document.getElementById("kedua")
const hasil = document.getElementById("hasil")
const tambah = document.getElementById("tambah")
const kurang = document.getElementById("kurang")
const kali = document.getElementById("kali")
const bagi = document.getElementById("bagi")
let nilau = 0;
let bil1 = 0;
let bil2 = 0;
pertama.addEventListener('input',function(e){
    let {value} = e.target
    bil1 = parseInt(value)
    console.log(bil1)
})
kedua.addEventListener('input',function(e){
    let {value} = e.target
    bil2 = parseInt(value)
    console.log(bil2)
})
tambah.addEventListener('click',function(){
    nilai = bil1 + bil2
    hasil.innerHTML = nilai
})
kurang.addEventListener('click',function(){
    nilai = bil1 - bil2
    hasil.innerHTML = nilai
})
kali.addEventListener('click',function(){
    nilai = bil1 * bil2
    hasil.innerHTML = nilai
})
bagi.addEventListener('click',function(){
    nilai = bil1 / bil2
    hasil.innerHTML = nilai
})
