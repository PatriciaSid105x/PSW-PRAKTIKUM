LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 10 SESI 02

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak


1. Tujuan Praktikum

Pada praktikum ini, saya belajar cara memilih elemen HTML menggunakan JavaScript, membuat elemen baru, dan menampilkan data ke halaman web. Saya juga belajar menggunakan array sebagai tempat menyimpan data dan fungsi render() untuk menampilkan data tersebut.

2. Struktur File

- index.html digunakan untuk membuat halaman utama.
- style.css digunakan untuk mengatur tampilan halaman.
- main.js berisi kode JavaScript untuk mengatur daftar peserta.
- Folder bukti/ berisi screenshot hasil praktikum.

3. Cara Menjalankan Program

    1. Ekstrak file proyek.
    2. Buka folder proyek di Visual Studio Code.
    3. Pastikan file index.html, style.css, dan main.js berada di dalam folder yang sama.
    4. Klik kanan pada index.html, lalu pilih Open with Live Server.
    5. Halaman akan terbuka di browser.
    6. Untuk melihat error, tekan F12, lalu buka bagian Console.

4. Penjelasan Pengerjaan

Pertama, saya menggunakan document.querySelector() untuk memilih elemen HTML yang memiliki ID daftar. Setelah itu, saya mencoba membuat elemen baru menggunakan document.createElement("li"). Saya juga menggunakan textContent untuk memasukkan tulisan <b>Rina</b>. Hasilnya, tulisan tersebut tampil sebagai teks biasa dan tidak menjadi tebal. Hal ini karena textContent hanya memasukkan teks, bukan membaca tag HTML. Selanjutnya, saya membuat array bernama peserta yang berisi nama Rina dan Budi. Data dari array tersebut ditampilkan menggunakan fungsi render(). Sebelum menampilkan data, replaceChildren() digunakan untuk mengosongkan daftar terlebih dahulu. Dengan begitu, saat fungsi render() dipanggil lagi, nama peserta tidak muncul berulang kali. Saya juga menambahkan pesan "Belum ada peserta" ketika array tidak memiliki data. Pada kode yang dikerjakan, pemeriksaan pesan ini masih ditulis di luar fungsi render().

5. Hasil Pengujian

| Pengujian                 | Tindakan                                           | Hasil                                                                    |

| Menampilkan peserta       | Menjalankan program dengan data Rina dan Budi.     | Kedua nama tampil pada halaman.                                          |
| Menggunakan textContent   | Memasukkan teks <b>Rina</b>.                       | Tag tampil sebagai teks biasa dan tidak membuat tulisan tebal            |
| Menjalankan render()      | Memanggil fungsi untuk menampilkan daftar.         | Daftar dibuat kembali tanpa menampilkan data yang sama secara berulang.  |
| Array kosong              | Mengosongkan isi array peserta.                    | Pesan "Belum ada peserta" ditampilkan.                                   |
| Selector salah            | Mencoba memilih elemen dengan ID yang tidak sesuai.| Hasilnya null dan muncul error ketika nilai tersebut digunakan.          |

Bukti pengujian dapat dilihat pada folder bukti, seperti screenshot hasil praktikum, pengujian selector, dan kondisi array kosong.

6. Catatan Error

Saat selector yang digunakan tidak sesuai dengan ID pada HTML, querySelector() akan menghasilkan null. Jika hasil tersebut digunakan untuk menambahkan elemen, program akan mengalami error. Untuk memperbaikinya, saya perlu memeriksa kembali penulisan selector dan memastikan ID pada JavaScript sama dengan ID pada HTML. Jika perubahan kode belum terlihat di browser, file harus disimpan dan halaman perlu di-refresh. Jika tampilan CSS tidak berubah, saya perlu memeriksa apakah file CSS sudah terhubung dengan benar.

7. Batasan Program

Program ini masih sederhana karena data peserta ditulis langsung di dalam array JavaScript. Belum ada form untuk menambahkan peserta atau tombol untuk menghapus nama peserta. Selain itu, pesan ketika daftar kosong belum dimasukkan ke dalam fungsi render(), sehingga perlu diperbarui lagi jika data berubah.

8. AI Use Statement

Saya menggunakan AI sebagai alat bantu untuk memahami beberapa bagian kode JavaScript, seperti querySelector(), createElement(), textContent, append(), dan render(). AI juga membantu saya menyusun penjelasan hasil praktikum dan membuat README.Penjelasan dari AI saya periksa kembali dengan melihat kode dan menjalankan program di browser. Dengan begitu, saya bisa mengetahui apakah hasil program sudah sesuai dengan yang diharapkan. AI digunakan untuk membantu proses belajar, sedangkan pemahaman kode tetap perlu saya kuasai sendiri.


