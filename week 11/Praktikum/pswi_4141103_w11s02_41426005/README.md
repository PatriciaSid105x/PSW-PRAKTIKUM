LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 11 SESI 02

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1.  Cara Menjalankan Program

1.Ekstrak folder praktikum ke komputer.
2.Buka folder proyek melalui Visual Studio Code.
3.Pastikan file index.html, style.css, main.js, dan folder data berada pada lokasi yang benar.
4.Pastikan file data/kegiatan.json tersedia.
5.Klik kanan file index.html, lalu pilih Open with Live Server.
6.Setelah halaman terbuka, klik tombol Muat kegiatan untuk menjalankan proses pengambilan data.
7.Periksa hasilnya melalui halaman web, tab Console, dan tab Network pada DevTools.
File JSON juga dapat dibuka langsung melalui server lokal untuk memastikan bahwa file tersebut bisa dibaca melalui HTTP.

2. Struktur File Proyek

- index.html berisi struktur halaman, tombol untuk memuat kegiatan, dan elemen untuk menampilkan daftar.
- style.css mengatur tampilan halaman, seperti warna, jarak, ukuran, dan bentuk tombol.
- main.js berisi proses pengambilan, pemeriksaan, dan penampilan data JSON.
- data/kegiatan.json berisi data kegiatan dalam format JSON.
- Bukti/ berisi screenshot hasil pengujian praktikum.

3. Pengerjaan Praktikum
Pada praktikum ini, saya membuat file JSON lokal yang berisi data kegiatan HTML dan CSS. Data tersebut kemudian diambil menggunakan JavaScript dengan bantuan fetch() dan async/await. Setelah data berhasil diambil, program memeriksa respons HTTP dan memastikan data berbentuk array. Selanjutnya, setiap judul kegiatan diperiksa dan ditampilkan ke halaman menggunakan elemen HTML li dan textContent. Program juga menggunakan try...catch untuk menangani kesalahan ketika proses pengambilan data gagal. Tombol Muat kegiatan digunakan untuk menjalankan proses tersebut saat diklik. "TextContent" adalah properti JavaScript yang digunakan untuk memasukkan atau menampilkan teks ke dalam elemen HTML. Dengan textContent, tulisan yang mengandung tag HTML akan dianggap sebagai teks biasa, bukan dijalankan sebagai elemen HTML.

4. Hasil Pengujian

Pengujian	    |       Hasil	    |       Keterangan
JSON lokal	    |Berhasil	        |Dua data kegiatan terbaca.
Fetch	        |Berhasil	        |Data berhasil diambil.
HTTP 404	    |Berhasil	        |Error 404 terdeteksi.
Array kosong	|Berhasil	        |Diperiksa melalui Console.
Judul markup	|Berhasil	        |Tag HTML tampil sebagai teks.
Validasi JSON	|Berhasil	        |Struktur JSON dinyatakan valid.

5. Penjelasan Perubahan
Pada praktikum ini, perubahan utama dibuat dengan menambahkan proses pengambilan data JSON ke dalam main.js. Sebelumnya halaman hanya menampilkan struktur HTML. Setelah Fetch dibuat, tombol Muat kegiatan sudah digunakan untuk meminta data dari file JSON lokal. Program juga ditambahkan pemeriksaan respons HTTP, pemeriksaan bentuk array, pemeriksaan tipe data judul, dan penanganan error menggunakan try...catch. Data yang berhasil dibaca kemudian ditampilkan sebagai daftar pada halaman. File data/kegiatan.json digunakan sebagai sumber data latihan. File style.css mengatur tampilan halaman agar bagian utama dan tombol lebih mudah dilihat.

6. AI Use Statement
Saya menggunakan AI sebagai alat bantu untuk menjelasan konsep Promise, async/await, Fetch, validasi JSON. AI tidak saya gunakan sebagai pengganti pengujian. Kesesuaian penjelasan tetap saya periksa dengan membandingkan isi modul, kode pada proyek, dan screenshot hasil praktikum. Saya bertanggung jawab memahami serta menjelaskan kode yang digunakan.