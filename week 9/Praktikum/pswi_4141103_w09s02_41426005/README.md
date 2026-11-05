LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 9 SESI 02

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1. Hasil Eksperimen String dan Number

Pada eksperimen ini, dilakukan pengujian untuk memahami perbedaan tipe data string dan number dalam JavaScript. Pengujian menggunakan nilai "2" yang ditambahkan dengan angka 1. Hasil dari teks + 1 adalah 21 karena JavaScript menggabungkan kedua nilai tersebut sebagai string. Sementara itu, penggunaan Number(teks) + 1 menghasilkan 3 karena nilai string "2" diubah terlebih dahulu menjadi number sehingga dapat dihitung secara matematis. Selain itu, dilakukan pengujian menggunakan typeof untuk mengetahui tipe data dan Number("abc") untuk menguji konversi teks yang tidak valid. Hasil konversi "abc" adalah NaN, sedangkan Number.isFinite() menghasilkan false. Dari eksperimen ini dapat dipahami bahwa konversi tipe data diperlukan agar operasi perhitungan menghasilkan nilai yang sesuai.

2. Hasil Eksperimen Jumlah 1-5 dan Harga Tetap Tiket

Pada eksperimen ini, dibuat pemeriksaan jumlah pembelian tiket menggunakan conditional if-else dengan batas minimal 1 tiket dan maksimal 5 tiket. Harga setiap tiket ditetapkan sebesar Rp10.000. Pengujian dilakukan menggunakan beberapa nilai, yaitu 0, 1, 5, 6, 1,5, dan abc. Hasilnya, jumlah 1 tiket diterima dengan total harga Rp10.000, sedangkan jumlah 5 tiket diterima dengan total Rp50.000. Jumlah 0 dan 6 ditolak karena berada di luar batas pembelian. Input 1,5 juga ditolak karena bukan bilangan bulat, sementara input abc ditolak karena tidak dapat dikonversi menjadi angka yang valid. Penggunaan Number.isInteger() berfungsi untuk memastikan jumlah tiket berupa bilangan bulat, sedangkan kondisi if-else digunakan untuk menentukan apakah jumlah pembelian memenuhi ketentuan. Dari eksperimen ini dapat dipahami bahwa conditional membantu program memvalidasi input sebelum melakukan perhitungan harga.

3. Hasil Eksperimen Loop Koleksi

Pada eksperimen loop koleksi, digunakan array dan perulangan for...of untuk menampilkan setiap data yang tersimpan. Pengujian pertama menggunakan tiga item, yaitu HTML, CSS, dan Audit. Hasilnya, ketiga item berhasil ditampilkan secara berurutan melalui Console. Selanjutnya, dilakukan pengujian menggunakan array kosong dan hasilnya tidak menampilkan keluaran karena tidak terdapat data yang dapat diproses. Pada pengujian berikutnya, ditambahkan satu item sehingga jumlah koleksi menjadi empat, yaitu HTML, CSS, Audit, dan Rias. Hasilnya, seluruh item berhasil ditampilkan. Dari eksperimen ini dapat dipahami bahwa perulangan for...of memudahkan proses pengambilan data dalam array dan jumlah iterasi akan menyesuaikan dengan banyaknya item yang tersedia.

4. Hasil Latihan Mandiri
Melakukan pengujian ulang terhadap materi string, number, conditional, dan loop. Pengujian menggunakan data normal, data batas, dan data yang tidak valid.

Hasil latihan menunjukkan bahwa:
    1. String "2" yang ditambah angka 1 menghasilkan 21, sedangkan konversi menggunakan Number() menghasilkan 3.
    2. Jumlah tiket 0 dan 6 ditolak karena berada di luar batas pembelian.
    3. Jumlah tiket 1 dan 5 diterima karena memenuhi ketentuan yang ditetapkan.
    4. Input 1,5 ditolak karena bukan bilangan bulat.
    5. Input abc tidak dapat dikonversi menjadi angka yang valid.
    6. Array kosong tidak menghasilkan iterasi.



5. AI Use Statement

Dalam praktikum ini, saya menggunakan ChatGPT sebagai alat bantu untuk memahami materi JavaScript, terutama mengenai tipe data string dan number, conditional, serta loop. AI digunakan untuk membantu menjelaskan konsep program, memahami perbedaan hasil pengujian, dan menyusun dokumentasi laporan berdasarkan modul praktikum. Saran dan penjelasan yang diberikan AI kemudian disesuaikan dengan kode program serta hasil pengujian yang telah dilakukan. Penggunaan AI hanya sebagai pendamping pembelajaran, sedangkan proses pengerjaan, pengujian program, dan pemahaman terhadap hasil tetap dilakukan oleh saya sendiri.