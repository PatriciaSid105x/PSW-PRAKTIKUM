LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 7 SESI 02

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

Kode sumber : Modul week 7 sesi 02, week 02 sesi 03, week 3 sesi 03, week 5 sesi 03

1. CARA MENJALANKAN

 Ekstrak ZIP ke folder kerja.
 Buka folder proyek melalui Visual Studio Code.
 Pastikan ekstensi Live Server tersedia.
 Klik kanan index.html Open with Live Server
 Uji tautan Beranda, Kegiatan, dan Daftar pada setiap halaman. Coba tombol Back/Forward browser.
 Buka DevTools (F12). Gunakan Console untuk error JavaScript, Network untuk file yang gagal dimuat/404, dan Elements/Computeduntuk memeriksa CSS.



2. HASIL UJI

Folder Bukti/ berisi:
- validator index.png — screenshot hasil Nu HTML Checker untuk index.html, terlihat tanpa error atau warning.
- validator daftar.png — screenshot checker yang memperlihatkan hasil pemeriksaan tanpa error atau warning pada file yang diperiksa.
-validator kegiatan.png — screenshot checker yang memperlihatkan warning terkait atribut border pada elemen <table>; gunakan CSS untuk styling tabel.
- 320px.png dan 1200px.png — bukti tampilan pada viewport kecil dan lebar.
- zoom200.png — bukti tampilan dengan zoom.
- git.png — tangkapan layar riwayat/status Git.

3. PENJELASAN PERUBAHAN

 Perubahan yang menjadi fokus praktikum adalah integrasi beberapa halaman, penggunaan stylesheet bersama, layout kartu responsif, gambar yang menyesuaikan lebar kontainer, fokus keyboard, dan preferensi prefers-reduced-motion. Katalog menggunakan CSS Grid satu kolom pada layar sempit dan tiga kolom mulai 48rem. Gaya kartu juga menggunakan Flexbox.

4. BATASAN

 - Situs masih statis dan belum terhubung ke database atau layanan backend.
- Sumber gambar/aset eksternal tidak tercatat lengkap dalam paket. Pastikan izin penggunaan dan cantumkan sumber asli sebelum publikasi.
- srcset pada gambar header saat ini menunjuk ke file yang sama untuk kandidat 320w dan 640w, sehingga belum menyediakan variasi resolusi yang nyata.
- CSS perlu diperiksa di browser target. Aturan bersarang di dalam body dan .card bergantung pada dukungan CSS nesting; untuk kompatibilitas lebih baik, pindahkan aturan img dan .card:hover menjadi selector terpisah.
- daftar.html perlu diperiksa untuk struktur form dan penulisan markup. Form pembungkus saat ini ditutup sebelum field input; akibatnya field dapat berada di luar form saat dikirim.
- index.html memanggil main.js dari path root, sedangkan file JavaScript berada di js/main.js. Periksa Console dan perbaiki path agar konsisten.

5. AI USE STATEMENT

  Saya menggunakan ChatGPT untuk membantu memahami konsep CSS responsif dan integrasi situs multipage, meninjau kemungkinan masalah pada HTML/CSS/JavaScript, menyusun matriks pengujian, serta merapikan dokumentasi. Saran AI tidak dianggap sebagai hasil pengujian otomatis. Saya memeriksa kode dan perlu memverifikasi setiap perbaikan melalui browser, DevTools, dan validator. Saya bertanggung jawab memahami kode yang dikumpulkan dan mampu menjelaskannya saat walkthrough.