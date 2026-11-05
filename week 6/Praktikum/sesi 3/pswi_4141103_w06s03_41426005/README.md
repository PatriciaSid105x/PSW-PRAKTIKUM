LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 6 SESI 02
Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

Kode sumber : Psw1 week 6 sesi 03

1. CARA MENJALANKAN

Buka folder proyek menggunakan Visual Studio Code, kemudian buka file index.html. Klik kanan pada file tersebut dan pilih Open with Live Server agar website terbuka di browser. Setelah halaman tampil, periksa gambar, navigasi, kartu kegiatan, dan tombol yang tersedia. Untuk memeriksa error, buka DevTools dengan menekan F12, kemudian gunakan tab Console untuk melihat pesan kesalahan dan tab Elements untuk memeriksa penerapan CSS.


2. HASIL UJI

Pengujian mengacu pada matriks uji dalam modul, yaitu gambar, container, zoom, dan reduced motion. Pemeriksaan kode menunjukkan bahwa website telah menggunakan Grid satu kolom sebagai tampilan awal dan media query pada lebar minimal 48rem untuk mengubah katalog menjadi dua kolom. Aturan fokus keyboard juga tersedia melalui :focus-visible.

Namun, ukuran judul responsif, container query, dan pemilihan gambar berdasarkan resolusi masih perlu diperbaiki. Pengujian gambar harus memastikan aset berhasil dimuat dan tidak menghasilkan error 404. Pengujian container dilakukan dengan mengubah lebar pembungkus kartu, sedangkan pengujian zoom dan reduced motion dilakukan melalui browser. Hasil aktual dan bukti screenshot dicatat setelah setiap pengujian selesai.

3. PENJELASAN PERUBAHAN

Perubahan difokuskan pada penerapan gambar responsif, fluid sizing, dan preferensi pengguna sesuai materi praktikum. Sebelum perbaikan, aturan CSS masih memiliki penulisan yang berpotensi mengganggu penerapan gambar responsif dan ukuran judul, sementara container query belum terhubung dengan elemen HTML yang sesuai. Setelah perbaikan, aturan gambar ditempatkan secara terpisah, ukuran judul menggunakan clamp() tanpa ditimpa aturan lain, dan container query dihubungkan dengan pembungkus kartu. Gambar juga perlu menggunakan file resolusi berbeda melalui srcset dan sizes. Pengujian dilanjutkan pada berbagai ukuran layar, zoom, navigasi keyboard, dan preferensi reduced motion.

4. BATASAN

Website masih berupa halaman statis dan belum menggunakan database. Gambar responsif belum optimal karena kandidat resolusi masih menggunakan file yang sama. Container query dan ukuran judul responsif perlu diperbaiki agar bekerja sesuai tujuan. Hasil pengujian pada berbagai viewport, zoom, dan reduced motion harus dikonfirmasi melalui browser.

5. AI USE STATEMENT

Saya menggunakan ChatGPT untuk membantu memahami materi CSS responsif, mengidentifikasi kemungkinan penyebab error pada stylesheet, menyusun langkah pengujian berdasarkan modul, serta menyusun dokumentasi README. Saran AI digunakan sebagai bahan pembelajaran dan perlu diverifikasi melalui pemeriksaan kode serta pengujian langsung pada browser. Saya bertanggung jawab memahami perubahan yang dilakukan dan menjelaskan hasil praktikum secara mandiri.   