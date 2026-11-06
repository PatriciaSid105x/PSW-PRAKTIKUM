LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 9 SESI 03

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1. Deskripsi Praktikum
Pada praktikum ini, saya belajar tentang function, array, object, dan module pada JavaScript. Saya mencoba membuat function untuk menghitung total, menyimpan data kegiatan, mengambil data yang masih tersedia, serta memisahkan kode JavaScript ke file yang berbeda.

2. Struktur Folder
w09s03/
├── index.html
├── style.css
├── main.js
├── utils.js
├── README.md
└── Bukti/
    ├── path import.png
    ├── perbaiki scope.png
    ├── script module.png
    ├── tiga kegiatan.png
    ├── uji kuota 0.png
    ├── uji normal.png
    ├── uji tidak valid.png
    ├── uji utils.png
    └── uji validator.png

3. Cara Menjalankan

    1.Buka folder proyek menggunakan Visual Studio Code.
    2.Pastikan file HTML dan JavaScript berada di dalam folder proyek.
    3.Klik kanan file index.html, lalu pilih Open with Live Server.
    4.Setelah halaman terbuka di browser, tekan F12 untuk membuka DevTools.
    5.Pilih tab Console untuk melihat hasil dari JavaScript.
    Program dijalankan menggunakan Live Server karena main.js mengambil function dari file utils.js.

4. Penjelasan Pengerjaan
a. Function
Saya membuat function hitungTotal() untuk menghitung jumlah dikali harga. Hasil perhitungan dikembalikan menggunakan return, sedangkan console.log() digunakan untuk menampilkan hasil di Console. Saya juga mencoba input normal dan input yang tidak sesuai.
b. Array dan Object
Saya menyimpan data kegiatan dalam array. Setiap kegiatan memiliki id, judul, dan kuota. Method filter() digunakan untuk menampilkan kegiatan yang kuotanya masih ada. Saya juga menambahkan kegiatan ketiga dan mencoba map() untuk mengambil judul kegiatan.
c. Destructuring dan Scope
Saya mencoba mengambil nilai judul dan kuota dari object menggunakan destructuring. Saya juga mencoba mengakses variabel yang dibuat di dalam block dari luar block. Hasilnya muncul ReferenceError karena variabel tersebut hanya bisa digunakan di dalam block tempat variabel dibuat. Perbaikannya adalah menggunakan variabel pada scope yang benar.
d. Module
Kode JavaScript dipisahkan menjadi utils.js dan main.js. Function dibuat di utils.js, lalu dipanggil dari main.js menggunakan import. Pada file HTML, JavaScript dipanggil dengan type="module". Penulisan path file harus benar supaya module bisa dijalankan.

5. Hasil Pengujian
Pengujian	                                Hasil
Function normal	        |   Perhitungan 2 × 10000 menghasilkan 20000.
Input tidak valid	    |   Input yang tidak sesuai dengan aturan validasi ditolak sesuai kode.
Menambahkan kegiatan	|   Data kegiatan ketiga berhasil ditambahkan pada percobaan.
Filter kuota nol	    |   Kegiatan dengan kuota nol tidak ditampilkan dalam hasil filter.
Destructuring dan scope	|   Properti object dapat diambil. Variabel di dalam block tidak bisa diakses dari luar block.
Module	                |   main.js mengambil function dari utils.js. Path import harus ditulis dengan benar.
Validator	            |   Kode diperiksa menggunakan validator dan hasilnya disimpan pada folder bukti.

6. Kendala dan Cara Mengatasinya
Saat mengerjakan praktikum, beberapa hal yang perlu diperhatikan adalah penulisan path import, penggunaan variabel sesuai scope, dan menjalankan halaman melalui server lokal. Jika module tidak terbaca, periksa kembali nama file dan path-nya. Jika muncul ReferenceError, periksa apakah variabel digunakan di luar block tempat variabel dibuat.

7. Batasan
Data kegiatan masih ditulis langsung di dalam JavaScript. Jadi, jika ingin mengubah atau menambah kegiatan, data harus diubah melalui kode. Hasil latihan juga dilihat melalui Console dan belum menggunakan database.

8. AI Use Statement
Saya menggunakan ChatGPT untuk membantu memahami materi JavaScript, seperti function, array, object, dan module. AI juga membantu memberikan penjelasan ketika saya menemukan error serta membantu menyusun dan merapikan laporan praktikum. Setiap saran dari AI saya periksa kembali dengan modul, kode program, dan hasil pengujian melalui browser serta Console. Dengan bantuan AI, saya lebih mudah memahami materi dan mengetahui kesalahan dalam pengerjaan. Namun, AI hanya digunakan sebagai alat bantu belajar, sedangkan proses pengerjaan dan hasil akhir tetap menjadi tanggung jawab saya.