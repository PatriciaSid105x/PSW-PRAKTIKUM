LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 10 SESI 03

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak


1. Deskripsi Praktikum

Pada praktikum Minggu 10 Sesi 3, saya mempelajari cara mengolah form, melakukan validasi input, dan menggunakan event delegation pada JavaScript. Praktikum ini menggunakan HTML dan JavaScript untuk membuat halaman daftar peserta yang dapat menambahkan dan menghapus nama peserta.

2. Tujuan Praktikum

-Memahami cara memilih dan membuat elemen DOM.
-Menggunakan event pada form dan tombol.
-Memahami penggunaan state untuk menyimpan data sementara.
-Menerapkan fungsi render untuk menampilkan data.
-Melakukan validasi sederhana pada input pengguna.
-Memahami penggunaan event delegation untuk tombol hapus.

3. Struktur File

index.html : Membuat struktur halaman daftar peserta.
main.js : Mengatur proses menambah, menampilkan, dan menghapus peserta.
style.css : File untuk mengatur tampilan halaman.
bukti/ : Menyimpan screenshot hasil praktikum dan pengujian.
README.md : Berisi penjelasan praktikum dan hasil pengerjaan.

4. Cara Menjalankan Program

    1.Buka folder praktikum menggunakan Visual Studio Code.

    2.Pastikan file HTML dan JavaScript berada dalam folder yang sama.

    3.Buka file index.html.

    4.Klik kanan pada file tersebut, kemudian pilih Open with Live Server.

    5.Browser akan menampilkan halaman Daftar Peserta.

    6.Masukkan nama pada kolom input, kemudian tekan tombol Tambah.

    7.Untuk menghapus peserta, tekan tombol Hapus di samping nama peserta.

5. Penjelasan Pengerjaan

a. Membuat daftar peserta
Pada bagian ini, saya menggunakan JavaScript untuk membuat elemen li dan menampilkan data peserta ke dalam halaman HTML. Data peserta disimpan dalam bentuk array yang berisi ID dan nama.

b. Membuat fungsi render
Fungsi render() digunakan untuk menampilkan ulang daftar peserta berdasarkan data yang tersimpan. Sebelum menampilkan data, program mengosongkan daftar menggunakan replaceChildren(), kemudian membuat elemen baru sesuai isi array peserta.

c. Membuat tombol hapus
Setiap peserta memiliki tombol Hapus. Tombol tersebut diberikan atribut data-id agar program dapat mengetahui peserta mana yang akan dihapus.

d. Menggunakan event delegation
Event delegation digunakan dengan memasang satu event listener pada elemen daftar peserta. Ketika tombol Hapus diklik, JavaScript akan mencari tombol yang memiliki atribut data-id, mengambil ID peserta, lalu menghapus data tersebut menggunakan filter().

e. Membuat form dan validasi
Form digunakan untuk menerima nama peserta. Program mengambil input menggunakan FormData, kemudian menggunakan trim() untuk menghilangkan spasi di awal dan akhir teks. Jika input kosong atau hanya berisi spasi, program akan menampilkan pesan bahwa nama harus diisi. Jika input benar, data peserta akan ditambahkan ke dalam array dan daftar akan ditampilkan kembali menggunakan render().

6. Hasil Pengujian

Menambah peserta: Menguji penambahan nama melalui form.
Menghapus peserta: Menguji tombol Hapus pada daftar peserta.
Memeriksa data-id: Memastikan setiap tombol memiliki ID yang sesuai dengan peserta.
Input nama kosong atau spasi: Menguji validasi agar input yang tidak sesuai tidak ditambahkan.
Input menyerupai markup HTML: Menguji keamanan tampilan ketika nama yang dimasukkan menyerupai tag HTML.
Validasi HTML: Memeriksa struktur HTML menggunakan validator.
Hasil pengujian didokumentasikan dalam folder bukti/ berupa screenshot.

7. Penjelasan Perubahan

Pada praktikum ini, halaman yang sebelumnya hanya menampilkan daftar peserta dikembangkan menjadi halaman yang dapat melakukan penambahan dan penghapusan data. JavaScript digunakan untuk mengatur data peserta melalui array, sedangkan fungsi render digunakan untuk memperbarui tampilan secara otomatis.

Selain itu, ditambahkan validasi input menggunakan trim() agar nama yang hanya berisi spasi tidak diterima. Tombol hapus juga dibuat menggunakan event delegation sehingga tombol yang muncul setelah proses render tetap dapat digunakan.

8. Batasan Program

Data peserta hanya disimpan sementara di dalam array JavaScript, data akan kembali ke kondisi awal ketika halaman di-refresh, program belum menggunakan database atau penyimpanan lokal, tampilan masih sederhana dan belum memiliki banyak pengaturan CSS.

9. AI Use Statement

Saya menggunakan ChatGPT sebagai alat bantu untuk memahami beberapa konsep JavaScript, seperti DOM, event listener, validasi form, fungsi render, dan event delegation. AI juga membantu memberikan penjelasan mengenai fungsi beberapa bagian kode agar lebih mudah dipahami. Kode yang digunakan tetap saya pelajari dan periksa kembali melalui Visual Studio Code dan browser. Saya juga melakukan pengujian untuk memastikan fitur menambah dan menghapus peserta dapat berjalan sesuai tujuan praktikum.
