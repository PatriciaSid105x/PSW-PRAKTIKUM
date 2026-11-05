const greetingButton =
 document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
 alert('Hallo, Selamat Belajar Pengembangan Situs Web I!');
});
console.log('main.js berhasil dijalankan');

const tombol1 = document.getElementById('btn-1');
tombol1.addEventListener('click', () => {
    alert('Ini adalah gunung yang berada di Pulau Lombok');
});

const tombol2 = document.getElementById('btn-2');
tombol2.addEventListener('click', () => {
    alert('Ini adalah gunung yang berada di perbatasan Pulau Jawa Tengah dan Jawa Timur');
});

const tombol3 = document.getElementById('btn-3');
tombol3.addEventListener('click', () => {
    alert('Ini adalah gunung yang berada di Pulau Jawa Tengah');
});

const tombol4 = document.getElementById('btn-4');
tombol4.addEventListener('click', () => {
    alert('Ini adalah gunung yang berada di Kabupaten Wonosobo, Jawa Tengah');
});

const tombol5 = document.getElementById('btn-5');
tombol5.addEventListener('click', () => {
    alert('Ini adalah gunung yang berada di Purbalingga, Jawa Tengah');
});
