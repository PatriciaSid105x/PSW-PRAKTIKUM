LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 11 SESI 03

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1. Cara Menjalankan

Proyek dijalankan menggunakan Live Server di Visual Studio Code. Setelah website terbuka di browser, tekan tombol **Muat Kegiatan** untuk mengambil data dari file JSON. Data yang berhasil diambil akan ditampilkan pada halaman web.

2. Penjelasan Perubahan

Pada praktikum ini dibuat file JSON yang berisi data kegiatan. Kemudian ditambahkan tombol Muat Kegiatan, area pesan, dan daftar untuk menampilkan data pada halaman web.

Selanjutnya dibuat fungsi JavaScript menggunakan fetch() untuk mengambil data dari file JSON. Data yang diambil akan diperiksa terlebih dahulu agar sesuai dengan bentuk yang dibutuhkan program. Jika data sesuai, maka data akan ditampilkan pada halaman web.

Selain itu, ditambahkan juga pesan saat data sedang dimuat, pesan jika data kosong, serta batas waktu untuk menghentikan proses pengambilan data jika terlalu lama. Perubahan ini dibuat agar pengguna bisa mengetahui proses yang sedang berjalan dan pesan jika terjadi kesalahan.

3. Hasil Uji

-Pengujian Data Valid
Pengujian dilakukan dengan menggunakan data JSON yang benar. Hasilnya, data kegiatan berhasil diambil dan ditampilkan pada halaman web.
Hasil: Berhasil.

-Pengujian HTTP 404
Pengujian dilakukan dengan menggunakan alamat file yang tidak ditemukan. Website menampilkan pesan gagal memuat data.
Hasil: Berhasil.

-Pengujian Object Bukan Array
Pengujian dilakukan dengan mengubah isi JSON menjadi object. Program menolak data tersebut karena bentuknya tidak sesuai dengan yang dibutuhkan.
Hasil: Berhasil.

-Pengujian Judul dengan Markup
Pengujian dilakukan dengan memasukkan tag HTML ke dalam judul kegiatan. Hasilnya, tag tersebut ditampilkan sebagai teks biasa dan tidak dijalankan oleh browser.
Hasil: Berhasil.

-Pengujian Data Kosong
Pengujian dilakukan dengan menggunakan array kosong pada file JSON. Website menampilkan pesan "Belum ada kegiatan".
Hasil: Berhasil.

-Pengujian JSON Rusak
Pengujian dilakukan dengan membuat format JSON yang tidak lengkap. Website menampilkan pesan gagal memuat data dan error dapat dilihat melalui Console.
Hasil: Berhasil.

-Pengujian Jaringan Lambat
Pengujian dilakukan dengan menggunakan fitur throttling pada DevTools untuk memperlambat koneksi jaringan. Proses pengambilan data dapat diamati sesuai kondisi jaringan yang digunakan.
Hasil: Berhasil.

-Pengujian Timeout
Pengujian dilakukan dengan memberikan batas waktu pada proses pengambilan data. Jika waktu yang ditentukan habis, proses pengambilan data akan dibatalkan secara otomatis.
Hasil: Berhasil.

-Pengujian Offline
Pengujian dilakukan dengan mengaktifkan mode Offline melalui DevTools. Website tidak dapat mengambil data dari file JSON dan menampilkan pesan gagal memuat.
Hasil: Berhasil.

4. Batasan

Program ini masih sederhana karena data yang digunakan berasal dari file JSON lokal. Program juga belum terhubung dengan database atau sumber data dari internet. Website dijalankan menggunakan Live Server karena jika file HTML dibuka secara langsung melalui browser, proses pengambilan data dapat mengalami masalah akibat aturan CORS.

5. AI Use Statement

Dalam praktikum ini, AI digunakan sebagai alat bantu untuk memahami fungsi kode JavaScript, terutama penggunaan fetch(), pengecekan data JSON, dan penanganan error. AI juga membantu menjelaskan cara melakukan pengujian melalui Chrome DevTools, seperti pengujian jaringan lambat, timeout, dan offline. Seluruh kode dan hasil pengujian tetap diperiksa dan disesuaikan dengan pengerjaan praktikum.