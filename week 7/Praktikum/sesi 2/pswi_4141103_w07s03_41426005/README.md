LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 7 SESI 03

Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

1. Catatan Tindakan dan Hasil Nyata (Pengamatan Git)Persiapan Lingkungan & Inisialisasi (git init / git status)
  Tindakan: Membuka folder kerja praktikum, memastikan struktur direktori rapi (index.html, style.css, main.js, dan folder bukti/), lalu memeriksa status awal repository.  
  Hasil Nyata: Perintah git status menunjukkan direktori bersih dan siap dilacak, serta memastikan tidak ada file sensitif atau data pribadi yang ikut terunggah.   Pembuatan dan Pengujian Branch Fitur (git switch -c fitur-petunjuk):Tindakan: Membuat branch baru bernama fitur-petunjuk untuk menambahkan panduan format pengisian form pada halaman web. 
  Hasil Nyata: Perintah git branch mengonfirmasi bahwa posisi aktif berada pada branch fitur baru, terpisah dari branch utama. Perubahan kode berhasil dicatat melalui git diff.  
  Tindakan: Melakukan perbandingan perubahan (diff) antara branch utama dan branch fitur, lalu mencatat dua catatan perbaikan/komentar konkret pada berkas review.md.  
  Hasil Nyata: Komentar peninjauan berhasil ditindaklanjuti dengan melakukan perbaikan kecil pada tata letak form dan melakukan commit revisi.   Penggabungan Perubahan (git merge):Tindakan: Berpindah kembali ke branch utama menggunakan git switch dan menggabungkan branch fitur-petunjuk menggunakan perintah git merge.Hasil Nyata: Riwayat commit tetap terjaga dengan baik tanpa menghilangkan perubahan yang telah dibuat, yang diverifikasi melalui perintah git log --oneline --max-count=5.

2. Matriks Uji Fungsionalitas
Input / KondisiTindakan PengujianHasil Aktual (Pengamatan)Status / BuktiKasus Normal(Input form sesuai format)Mengisi data form dengan format yang benar (misal: email valid, teks lengkap).Data berhasil diproses oleh JavaScript, pesan sukses/validasi hijau muncul, dan form terkirim dengan baik.Lolos(Sesuai harapan)Kasus Batas(Input data sangat panjang/maksimal)Memasukkan teks atau karakter dalam jumlah sangat panjang melebihi rata-rata pada input form.Elemen CSS container merespons dengan baik, teks terbungkus rapi (word-wrap aktif), tidak merusak layout.Lolos(Sesuai harapan)Kasus Gagal(Input kosong / format salah)Mengirimkan form dalam keadaan kosong atau format email salah tanpa simbol @.Validasi HTML/JS mendeteksi kesalahan, muncul peringatan (error message), dan proses submit tertahan.Lolos(Sesuai harapan)

3. Catatan Troubleshooting (Jika Ada Kendala)
Gejala: Sempat terjadi perbedaan tampilan (CSS mismatch) atau perubahan tidak langsung terlihat di browser setelah merge.

Pemeriksaan & Solusi: Melakukan hard refresh pada browser (Ctrl + F5) dan memastikan file CSS terpanggil dengan path yang benar pada tag <link> di index.html.

4. AI Use Statement
Alat yang Digunakan: Gemini (sebagai asisten penjelas konsep logika Git dan penyusunan struktur laporan).

Bagian Bantuan: Membantu memahami alur perintah git diff, penyusunan format matriks uji, serta penulisan template laporan README.md.

Verifikasi: Seluruh perintah Git, logika skrip, dan hasil pengujian telah diverifikasi secara mandiri melalui terminal VS Code dan pengujian langsung di browser lokal.
