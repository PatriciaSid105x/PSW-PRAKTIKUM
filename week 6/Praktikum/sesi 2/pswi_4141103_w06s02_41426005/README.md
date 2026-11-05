LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I WEEK 6 SESI 02
Nama : Patricia Sidabutar
Nim: 41426005
Prodi:DIV Teknologi Rekayasa Perangkat Lunak

KODE SUMBER : WEEK6 SESI 02
1. CARA MENJALANKAN
    Untuk membuka website, jalankan Visual Studio Code dan buka folder proyek yang telah disiapkan. Selanjutnya, cari file index.html, klik kanan, lalu pilih Open with Live Server agar halaman website dapat ditampilkan melalui browser. Setelah website terbuka, periksa setiap komponennya, seperti menu navigasi, kartu informasi, kartu kegiatan, dan tombol Tampilkan salam. Pastikan tombol tersebut dapat menampilkan pesan sesuai dengan fungsi JavaScript yang diterapkan. Jika terdapat bagian yang tidak tampil atau tidak bekerja sebagaimana mestinya, periksa kembali keterhubungan file HTML, CSS, dan JavaScript serta pastikan tidak ada kesalahan penulisan kode.

2. HASIL UJI
    Pengujian website dilakukan dengan menggunakan beberapa ukuran viewport untuk mengevaluasi perubahan tata letak pada kondisi layar yang berbeda. Screenshot yang tersimpan di folder bukti/ mencakup pengujian pada ukuran 320px, 767px, 768px, 769px, dan 1200px, serta percobaan menggunakan label atau teks panjang.

    Viewport 320px digunakan untuk memeriksa tampilan pada layar sempit. Ukuran 767px, 768px, dan 769px digunakan untuk mengamati perubahan tampilan di sekitar breakpoint, sedangkan 1200px digunakan untuk mengevaluasi tata letak pada layar yang lebih lebar. Pengujian teks panjang bertujuan untuk mengetahui apakah konten tetap berada di dalam wadah tanpa mengganggu susunan elemen lainnya.

    
3. PENJELASAN PERUBAHAN
    BEFORE : Sebelum perubahan diterapkan, saya mengamati tampilan awal website pada beberapa ukuran viewport, yaitu 320px, 767px, 768px, 769px, dan 1200px. Pengujian juga dilakukan dengan memasukkan teks berukuran panjang untuk mengetahui bagaimana halaman menangani konten yang membutuhkan ruang lebih besar. Melalui pengamatan ini, saya mempelajari bahwa perubahan lebar layar dapat memengaruhi susunan elemen website, terutama pada bagian kartu kegiatan dan navigasi. Tahap awal tersebut digunakan untuk memahami perilaku tata letak sebelum penyesuaian CSS dilakukan.

    AFTER : Setelah perubahan dilakukan, CSS Grid digunakan untuk menyusun kartu kegiatan agar lebih fleksibel, sedangkan media query diterapkan untuk mengatur perubahan jumlah kolom berdasarkan lebar viewport. Flexbox pada navigasi juga dimanfaatkan agar elemen menu dapat menyesuaikan ruang yang tersedia dan berpindah baris jika diperlukan. Selain itu, pengujian menggunakan teks panjang dilakukan untuk mengamati apakah konten tetap berada dalam batas wadahnya. Pemeriksaan kembali dilakukan pada ukuran viewport yang sama, khususnya di sekitar breakpoint 768px, untuk memahami perubahan perilaku tata letak sebelum dan sesudah melewati batas tersebut.

4. BATASAN
    Informasi kegiatan yang terdapat pada halaman kegiatan.html masih dimasukkan langsung ke dalam struktur HTML. Oleh karena itu, pembaruan data harus dilakukan secara manual melalui kode. Selain itu, penggunaan CSS Grid untuk menyusun kartu membuat tampilan perlu diperiksa pada beberapa ukuran layar agar susunan elemen tetap rapi dan sesuai dengan ruang yang tersedia.

    
5. AI USE STATEMENT
    Saya memanfaatkan ChatGPT sebagai pendukung pembelajaran untuk memahami konsep dan fungsi kode yang digunakan selama praktikum, terutama penerapan CSS Grid, Flexbox, dan Media Query dalam membangun tampilan website yang responsif. AI juga membantu menjelaskan cara kerja breakpoint serta menyusun dokumentasi praktikum agar lebih sistematis dan mudah dipahami. Melalui bantuan tersebut, saya dapat memahami tujuan penggunaan setiap properti CSS dan alasan dilakukannya perubahan pada kode. Namun, saran yang dihasilkan AI tidak langsung digunakan tanpa pemeriksaan, melainkan dipelajari dan disesuaikan dengan kebutuhan praktikum. Saya juga memeriksa kode serta menguji tampilan website secara langsung melalui browser dan DevTools untuk mengevaluasi kesesuaian tata letak, menemukan kemungkinan kesalahan, dan memastikan hasil implementasi sesuai dengan tujuan praktikum.
    
     