LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 12 SESI 03

Nama  : Patricia Sidabutar
Nim   : 41426005
Prodi : DIV Teknologi Rekayasa Perangkat Lunak

1. Cara Menjalankan

Project ini dijalankan menggunakan Visual Studio Code dan browser dengan bantuan Live Server.

1. Buka folder project di Visual Studio Code.
2. Pastikan file index.html, style.css, main.js, dan folder gambar berada di dalam folder project.
3. Klik kanan file index.html.
4. Pilih Open with Live Server.
5. Halaman website akan terbuka di browser. Pada halaman tersebut terdapat form untuk menambahkan peserta dan daftar peserta yang sudah tersimpan.

2. Penjelasan Perubahan

- Menampilkan peserta: Data peserta ditampilkan ke halaman menggunakan fungsi render().
- Menambahkan peserta: Pengguna dapat mengisi nama pada form, lalu menekan tombol Tambah. Program memeriksa nama menggunakan trim() agar input yang hanya berisi spasi tidak diterima.
- Menghapus peserta: Setiap peserta memiliki tombol Hapus. Program mengambil ID peserta, lalu menggunakan filter() untuk menghapus data yang ID-nya sesuai.
- Menyimpan data: Fungsi simpan() menggunakan localStorage.setItem() untuk menyimpan data peserta dalam bentuk JSON.
- Membaca data: Saat halaman dibuka, program mengambil data dari Local Storage menggunakan localStorage.getItem() dan mengubah JSON menjadi data JavaScript dengan JSON.parse().
- Memeriksa data: Program memeriksa apakah data berbentuk array, ID berupa bilangan bulat positif, dan nama berupa teks. Jika data tidak sesuai atau JSON gagal dibaca, program menampilkan pesan bahwa data lokal bermasalah.
- Fungsi ubah nama:Pada main.js terdapat fungsi ubahNama() untuk mengganti nama peserta. Fungsi ini memeriksa nama agar tidak kosong setelah spasi dihapus.
- Tampilan dan aksesibilitas: Halaman menggunakan label pada input, pesan dengan aria-live, serta garis fokus pada input dan tombol agar lebih mudah digunakan.

3. Hasil Uji

Pengujian dilakukan melalui halaman website dan DevTools browser. Hasil yang dicatat berdasarkan fitur dan bukti yang tersedia pada folder bukti.

| No.|       Pengujian            |                                           Hasil                                             |
|    |                            |                                                                                             |
| 1  | Menampilkan daftar peserta | Daftar peserta ditampilkan pada halaman.                                                    |
| 2  | Menambahkan peserta        | Nama yang diisi melalui form ditambahkan ke daftar dan disimpan ke Local Storage.           |
| 3  | Menghapus peserta          | Peserta dihapus berdasarkan ID menggunakan filter().                                        |
| 4  | Memeriksa dengan Debugger  | Nilai ID dan jumlah data pada array peserta dapat diperiksa saat proses hapus dijalankan.   |
| 5  | Memeriksa array kosong     | Bukti pemeriksaan array kosong tersedia pada folder bukti.                                  |
| 6  | Memeriksa tampilan teks    | Nama peserta ditampilkan menggunakan textContent, sehingga dimasukkan sebagai teks biasa.   |
| 7  | Memeriksa penyimpanan      | Data disimpan menggunakan Local Storage dan dibaca kembali ketika halaman dimuat.           |

4. Batasan

- Fungsi ubahNama() sudah tersedia di main.js, tetapi belum dihubungkan dengan tombol edit pada daftar peserta.
- Tombol Reset data latihan dan Tampilkan salam sudah ada di HTML, tetapi belum memiliki fungsi JavaScript.
- Data peserta disimpan di Local Storage browser, sehingga data hanya tersedia pada browser dan perangkat yang digunakan.
- Fungsi penyimpanan belum memiliki penanganan khusus jika proses localStorage.setItem() gagal.
- Website masih dijalankan melalui server lokal dan belum dipublikasikan ke hosting.

5. Kesimpulan

Dari praktikum ini, saya belajar menggunakan Local Storage untuk menyimpan dan membaca data peserta. Saya juga belajar mengelola data dengan fitur tambah dan hapus, memeriksa data JSON, serta menggunakan Debugger untuk melihat perubahan nilai ID dan isi array. Selain itu, saya memahami bahwa website perlu diperiksa dari sisi tampilan, aksesibilitas, dan keamanan data.

6. AI Use Statement

Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami materi dan kode program, terutama tentang JavaScript, Local Storage, CRUD, debugging, keamanan, dan aksesibilitas. AI juga membantu saya mencari tahu penyebab kesalahan pada kode.Setiap saran dari AI diperiksa kembali dengan menjalankan website melalui Live Server dan melakukan pengujian menggunakan browser. Dengan bantuan AI, saya lebih mudah memahami bagian kode yang sebelumnya belum saya pahami. Namun, saya tetap berusaha memahami setiap kode yang digunakan agar dapat menjelaskannya kembali. Selama menggunakan AI, saya tidak memasukkan password, API key rahasia, maupun data pribadi.
