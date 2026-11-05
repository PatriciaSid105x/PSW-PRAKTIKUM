LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 5 SESI 03
Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1. CARA MENJALANKAN
    a. Ekstrak folder proyek dari berkas ZIP.
    b. Pastikan struktur folder tetap seperti berikut:
   - index.html
   - css/style.css
   - js/main.js
   - Bukti/ (berisi dokumentasi tangkapan layar)
    c. Buka index.html menggunakan browser seperti Google Chrome, Microsoft Edge, atau Firefox.
    d. Klik tombol *Tampilkan salam* untuk menguji fungsi JavaScript.

2. HASIL UJI
    Kasus uji	            |   Kriteria

Viewport 320 px	            |Halaman tidak mengalami overflow horizontal
Viewport 768 px	            |Kolom menyesuaikan ruang
Viewport 1200 px	        |Grid memanfaatkan ruang yang tersedia
Satu card	                |Card tetap terbaca
Lima card                   |Penempatan otomatis Grid berjalan sesuai harapan
Teks panjang                |Teks membungkus tanpa merusak card
Urutan Tab                  |Fokus mengikuti urutan DOM
Validasi HTML/CSS           |Memeriksa struktur dan aturan kode

3. PENJELASAN PERUBAHAN

    Before: Website menampilkan halaman sederhana berisi profil singkat, tujuan belajar, dan katalog kegiatan mahasiswa. Katalog awalnya memiliki tiga card kegiatan dengan tata letak dua kolom yang belum fleksibel terhadap ukuran layar. Tampilan juga belum memiliki penanganan khusus untuk teks panjang, sehingga berpotensi menyebabkan card melebar atau tampilan kurang rapi.

    After: Website dikembangkan dengan menambahkan dua card sehingga katalog memiliki lima kegiatan, termasuk contoh teks panjang untuk menguji responsivitas. Tata letak katalog diperbarui agar jumlah kolom menyesuaikan lebar layar, baik pada perangkat kecil maupun layar desktop. Isi card dibuat lebih terstruktur dengan jarak yang konsisten, sementara teks panjang dapat membungkus agar tidak keluar dari card. 

4. BATASAN

    Website ini masih berupa situs yang menggunakan HTML, CSS, dan JavaScript tanpa backend atau database, sehingga data kegiatan ditulis langsung di dalam kode dan belum dapat dikelola secara dinamis. Fitur interaksi masih terbatas pada tombol salam yang menampilkan pesan melalui "alert()". Pengujian responsivitas telah didukung oleh bukti tampilan pada ukuran layar 320 px, 768 px, dan 1200 px, tetapi pengujian menyeluruh pada berbagai browser, aksesibilitas, dan navigasi keyboard masih perlu dilakukan. Selain itu, struktur HTML perlu diperbaiki dengan menggabungkan dua elemen "<main>" menjadi satu agar lebih sesuai dengan standar semantik HTML.

5. AI USE STATEMENT
     AI membantu menjelaskan perubahan website sebelum dan sesudah pengembangan, memberikan saran mengenai responsivitas tampilan pada ukuran layar 320 px, 768 px, dan 1200 px, serta membantu menyusun dokumentasi README yang mencakup cara menjalankan program, penjelasan perubahan, hasil pengujian, dan batasan website. AI juga digunakan untuk mengidentifikasi kekurangan struktur HTML dan kemungkinan pengembangan lebih lanjut. Seluruh saran dari AI saya gunakan sebagai referensi untuk mendukung pemahaman dan dokumentasi praktikum. Kesesuaian kode, tampilan website, serta hasil pengujian tetap perlu diperiksa secara langsung melalui browser dan validator. Dengan demikian, AI berperan sebagai alat bantu pembelajaran, bukan pengganti pemahaman terhadap kode maupun proses pengujian yang dilakukan.