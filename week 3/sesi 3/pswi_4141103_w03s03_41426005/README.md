LAPORAN PRAKTIKUM PSW 
NAMA: PATRICIA SIDABUTAR
NIM: 41426005
PRODI:  D4 TRPL1 

1. HASIL VALIDASI
Saya telah melakukan pengecekan kode menggunakan Nu Validator dan hasilnya tidak ada kesalahan yang ditemukan. Kode sudah valid dan sesuai aturan HTML.

2. TUJUAN
Praktikum pada modul Sesi 3 Week 3 ini bertujuan agar saya mengerti bagaimana cara membuat foto dan informasi di dalam form, mengerti proses pembuatan form pendaftaran, melihat respon sistem ketika input angka melebihi batas yang ditentukan, melihat respon ketika form email tidak diisi, memahami kegunaan setiap kode yang ditulis, dan belajar cara mengatasi apabila terjadi error.

3. CARA MENJALANKAN
Untuk menjalankannya, file index.html dibuka di VS Code lalu dijalankan dengan Live Server. Bisa dengan klik kanan pada file tersebut dan pilih Open with Live Server, atau lewat menu Run lalu Start Debugging untuk membukanya di browser. Setelah halaman terbuka, lengkapi data pendaftaran seperti nama lengkap, email, nomor HP, jumlah tiket, prodi, kode peserta, lalu memilih mode kehadiran, topik yang diminati, dan kebutuhan aksesibilitas. Catatan tambahan bisa diisi jika ada, kemudian mengklik tombol Daftar untuk mengirim.

4. HASIL PENGUJIAN
TABEL UJI

         KASUS         |        HARAPAN                
Email kosong           | Ditolak karena required         
Email abc              | Ditolak karena bentuk email
Email contoh valid     | Diterima jika lainnya valid
Jumlah 0/6             | Ditolak
Jumlah 1/5             | Diterima
Jumlah 1.5             | Ditolak bila step=1
Kode 12345             | Ditolak
Kode 001234            | Diterima
Keyboard               | Semua kontrol dapat dicapai



 