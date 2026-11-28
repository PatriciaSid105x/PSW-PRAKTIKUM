LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 12 SESI 02

Nama  : Patricia Sidabutar
Nim   : 41426005
Prodi : DIV Teknologi Rekayasa Perangkat Lunak

1. Cara Menjalankan

Untuk menjalankan program, buka folder praktikum menggunakan Visual Studio Code. Kemudian cari file index.html, klik kanan, lalu pilih Open with Live Server. Setelah halaman terbuka di browser, kita bisa mencoba menambahkan dan menghapus nama peserta melalui form yang tersedia.

2. Penjelasan Perubahan

Pada praktikum ini, program daftar peserta ditambahkan fitur untuk menyimpan data menggunakan Local Storage. Dengan fitur ini, data peserta tidak langsung hilang ketika halaman di-refresh. Data disimpan menggunakan nama key pswi.peserta.v1.

Selain itu, ditambahkan kode untuk membaca dan memeriksa data yang sudah disimpan. Jika data tidak sesuai atau mengalami masalah, program akan menampilkan pesan melalui try/catch. ID peserta juga dibuat bertambah secara otomatis supaya setiap peserta memiliki ID yang berbeda.

Kemudian, dibuat fungsi ubahNama() untuk mengganti nama peserta berdasarkan ID. Pada bagian terakhir, dicoba juga cara menghapus data latihan menggunakan removeItem() tanpa menghapus seluruh penyimpanan browser.

3. Hasil Uji
A. Matriks Pengujian

Kasus                                    Tindakan                                                           Hasil yang Diharapkan        

Tambah/              Menambahkan peserta, kemudian refresh halaman.                             Data peserta tetap ada setelah halaman di-refresh.

Update/reload        Mengubah nama peserta berdasarkan ID, kemudian refresh halaman.            Nama berubah dan perubahan tetap tersimpan.

Hapus/reload        Menghapus salah satu peserta, kemudian refresh halaman.                     Data peserta yang dihapus tidak muncul kembali.

Storage rusak       Memasukkan data bukan JSON ke Local Storage, kemudian refresh halaman.      Aplikasi menampilkan pesan error 

Dari pengujian ini, saya belajar bahwa Local Storage dapat digunakan untuk menyimpan data peserta agar tidak langsung hilang ketika halaman di-refresh. Selain itu, penggunaan try/catch membantu program menangani data yang rusak. Fungsi update dan hapus juga membantu mengelola data peserta berdasarkan ID.
Selanjutnya, dilakukan pengujian perubahan nama peserta. Hasil yang diharapkan adalah nama dapat berubah, tetapi ID tetap sama. Pengujian data rusak juga dilakukan dengan memasukkan teks yang bukan format JSON ke Local Storage. Setelah itu, program di-refresh untuk melihat apakah kesalahan dapat diketahui. Key latihan kemudian dihapus menggunakan removeItem().

4. Batasan

Program masih menggunakan Local Storage browser untuk menyimpan data, sehingga data hanya tersimpan pada browser yang digunakan. Jika data penyimpanan dihapus, data peserta juga bisa hilang. Juga, perubahan data pada satu tab belum tentu langsung terlihat pada tab lainnya.

5. AI Use Statement

AI digunakan untuk membantu memahami kode JavaScript dan menjelaskan fungsi dari setiap bagian program. Dari praktikum ini, saya belajar menggunakan Local Storage untuk menyimpan data, membaca data, memeriksa kesalahan, serta mengubah dan menghapus data peserta.