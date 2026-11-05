// Nama  : Chelsea Eunike Limbong
// NIM   : 41425043
// Prodi : DIV - Teknologi Rekayasa Perangkat Lunak

// Array untuk menyimpan data pegawai
let dataPegawai = []; // Array kosong saat pertama kali dijalankan

// Konstanta untuk persentase tunjangan dan pajak
const PERSENTASE_TUNJANGAN = 20; // Tunjangan manager 20%
const PERSENTASE_PAJAK = 10; // Pajak 10% untuk semua pegawai

// Fungsi untuk format angka menjadi format Rupiah (Rp 1.000)
function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID'); // toLocaleString untuk format Indonesia dengan pemisah titik
}

// Fungsi untuk menghitung tunjangan berdasarkan jabatan
function hitungTunjangan(jabatan, gajiPokok) {
    // Hanya Manager yang dapat tunjangan 20%
    if (jabatan === 'Manager') { // Jika jabatan adalah Manager
        return gajiPokok * (PERSENTASE_TUNJANGAN / 100); // Return 20% dari gaji pokok
    } else { // Jika jabatan bukan Manager (Staff atau Direktur)
        return 0; // Return 0 (tidak ada tunjangan)
    }
}

// Fungsi untuk menghitung pajak (semua pegawai dipotong 10%)
function hitungPajak(gajiPokok) {
    return gajiPokok * (PERSENTASE_PAJAK / 100); // Return 10% dari gaji pokok
}

// Fungsi untuk menghitung gaji bersih
function hitungGajiBersih(gajiPokok, tunjangan, pajak) {
    // Rumus: Gaji Bersih = Gaji Pokok + Tunjangan - Pajak
    return gajiPokok + tunjangan - pajak; // Return hasil perhitungan
}

// Fungsi untuk menambah pegawai baru
function tambahPegawai() {
    // Ambil nilai dari input form
    const nama = document.getElementById('namaPegawai').value.trim(); // .trim() untuk hapus spasi di awal/akhir
    const jabatan = document.getElementById('jabatan').value; // Ambil value dari select dropdown
    const gajiPokok = parseFloat(document.getElementById('gajiPokok').value); // parseFloat untuk konversi ke angka desimal
    
    // Validasi input (cek apakah ada yang kosong atau tidak valid)
    if (!nama) { // Jika nama kosong
        alert('Nama pegawai tidak boleh kosong!'); // Tampilkan alert peringatan
        return; // Hentikan fungsi
    }
    
    if (!jabatan) { // Jika jabatan belum dipilih
        alert('Silakan pilih jabatan pegawai!'); // Tampilkan alert peringatan
        return; // Hentikan fungsi
    }
    
    if (isNaN(gajiPokok) || gajiPokok <= 0) { // Jika gaji bukan angka atau <= 0
        alert('Gaji pokok harus berupa angka positif!'); // Tampilkan alert peringatan
        return; // Hentikan fungsi
    }
    
    // Hitung tunjangan, pajak, dan gaji bersih
    const tunjangan = hitungTunjangan(jabatan, gajiPokok); // Panggil fungsi hitungTunjangan
    const pajak = hitungPajak(gajiPokok); // Panggil fungsi hitungPajak
    const gajiBersih = hitungGajiBersih(gajiPokok, tunjangan, pajak); // Panggil fungsi hitungGajiBersih
    
    // Buat object pegawai baru
    const pegawai = {
        nama: nama, // Nama pegawai
        jabatan: jabatan, // Jabatan pegawai
        gajiPokok: gajiPokok, // Gaji pokok
        tunjangan: tunjangan, // Tunjangan (0 jika bukan Manager)
        pajak: pajak, // Pajak 10%
        gajiBersih: gajiBersih // Gaji setelah tunjangan dan pajak
    };
    
    // Tambahkan pegawai ke array
    dataPegawai.push(pegawai); // push() untuk menambah elemen ke array
    
    // Reset form input
    document.getElementById('namaPegawai').value = ''; // Kosongkan input nama
    document.getElementById('jabatan').value = ''; // Reset dropdown ke default
    document.getElementById('gajiPokok').value = ''; // Kosongkan input gaji
    
    // Update tampilan
    updateTampilan(); // Render ulang tabel dan statistik
    
    // Focus kembali ke input nama
    document.getElementById('namaPegawai').focus(); // Set focus ke input nama
}

// Fungsi untuk menghapus pegawai berdasarkan index
function hapusPegawai(index) {
    // Konfirmasi sebelum menghapus
    if (confirm('Yakin ingin menghapus data pegawai ini?')) { // Tampilkan dialog konfirmasi
        dataPegawai.splice(index, 1); // splice() untuk hapus 1 elemen di index tertentu
        updateTampilan(); // Update tampilan setelah dihapus
    }
}

// Fungsi untuk mencari pegawai dengan gaji bersih tertinggi
function cariPegawaiTertinggi() {
    // Cek apakah ada data pegawai
    if (dataPegawai.length === 0) { // Jika array kosong
        return null; // Return null jika tidak ada data
    }
    
    // Cari pegawai dengan gaji bersih tertinggi
    let tertinggi = dataPegawai[0]; // Inisialisasi dengan pegawai pertama
    
    dataPegawai.forEach(pegawai => { // Loop setiap pegawai
        if (pegawai.gajiBersih > tertinggi.gajiBersih) { // Jika gaji bersih lebih tinggi
            tertinggi = pegawai; // Update pegawai tertinggi
        }
    });
    
    return tertinggi; // Return object pegawai dengan gaji tertinggi
}

// Fungsi untuk menghitung total gaji bersih seluruh pegawai
function hitungTotalGaji() {
    // Cek apakah ada data pegawai
    if (dataPegawai.length === 0) { // Jika array kosong
        return 0; // Return 0 jika tidak ada data
    }
    
    // Jumlahkan semua gaji bersih
    let total = 0; // Inisialisasi total
    dataPegawai.forEach(pegawai => { // Loop setiap pegawai
        total += pegawai.gajiBersih; // Tambahkan gaji bersih ke total
    });
    
    return total; // Return total gaji bersih
}

// Fungsi untuk menghitung rata-rata gaji bersih
function hitungRataRataGaji() {
    // Cek apakah ada data pegawai
    if (dataPegawai.length === 0) { // Jika array kosong
        return 0; // Return 0 jika tidak ada data
    }
    
    // Hitung rata-rata dari total gaji
    const total = hitungTotalGaji(); // Panggil fungsi hitungTotalGaji
    const rataRata = total / dataPegawai.length; // Rata-rata = total / jumlah pegawai
    
    return rataRata; // Return rata-rata gaji
}

// Fungsi untuk update tampilan tabel dan statistik
function updateTampilan() {
    const bodyTabel = document.getElementById('bodyTabel'); // Ambil elemen tbody tabel
    bodyTabel.innerHTML = ''; // Kosongkan isi tabel dulu
    
    // Loop setiap pegawai untuk ditampilkan di tabel
    dataPegawai.forEach((pegawai, index) => { // forEach untuk iterasi array
        const row = document.createElement('tr'); // Buat elemen <tr> baru
        
        // Isi row dengan HTML untuk setiap kolom
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${pegawai.nama}</td>
            <td>${pegawai.jabatan}</td>
            <td>${formatRupiah(pegawai.gajiPokok)}</td>
            <td class="positive">${formatRupiah(pegawai.tunjangan)}</td>
            <td class="negative">-${formatRupiah(pegawai.pajak)}</td>
            <td class="gaji-bersih">${formatRupiah(pegawai.gajiBersih)}</td>
            <td>
                <button class="btn btn-danger" onclick="hapusPegawai(${index})">Hapus</button>
            </td>
        `; // Template literal untuk gabungkan HTML dengan data
        
        bodyTabel.appendChild(row); // Tambahkan row ke dalam tbody
    });
    
    // Update highlight pegawai tertinggi
    updateHighlight(); // Panggil fungsi untuk update card highlight
    
    // Update statistik
    updateStatistik(); // Panggil fungsi untuk update card statistik
}

// Fungsi untuk update card highlight pegawai tertinggi
function updateHighlight() {
    const pegawaiTertinggi = cariPegawaiTertinggi(); // Cari pegawai dengan gaji tertinggi
    
    // Update tampilan highlight card
    if (pegawaiTertinggi) { // Jika ada data pegawai
        document.getElementById('pegawaiTertinggi').textContent = pegawaiTertinggi.nama + ' (' + pegawaiTertinggi.jabatan + ')'; // Set nama dan jabatan
        document.getElementById('gajiTertinggi').textContent = formatRupiah(pegawaiTertinggi.gajiBersih); // Set gaji bersih
    } else { // Jika tidak ada data
        document.getElementById('pegawaiTertinggi').textContent = '-'; // Set dash
        document.getElementById('gajiTertinggi').textContent = 'Rp 0'; // Set 0
    }
}

// Fungsi untuk update card statistik
function updateStatistik() {
    // Update total pegawai
    document.getElementById('totalPegawai').textContent = dataPegawai.length; // Set jumlah pegawai
    
    // Update total gaji bersih
    const totalGaji = hitungTotalGaji(); // Hitung total gaji
    document.getElementById('totalGaji').textContent = formatRupiah(totalGaji); // Set total gaji dengan format rupiah
    
    // Update rata-rata gaji
    const rataRata = hitungRataRataGaji(); // Hitung rata-rata gaji
    document.getElementById('rataRataGaji').textContent = formatRupiah(rataRata); // Set rata-rata dengan format rupiah
}

// Fungsi untuk reset semua data
function resetData() {
    // Konfirmasi sebelum reset
    if (confirm('Yakin ingin menghapus semua data pegawai?')) { // Tampilkan dialog konfirmasi
        dataPegawai = []; // Kosongkan array dataPegawai
        updateTampilan(); // Update tampilan (akan jadi kosong)
        
        // Reset form input juga
        document.getElementById('namaPegawai').value = ''; // Kosongkan input nama
        document.getElementById('jabatan').value = ''; // Reset dropdown
        document.getElementById('gajiPokok').value = ''; // Kosongkan input gaji
        
        alert('Semua data berhasil dihapus!'); // Tampilkan notifikasi sukses
    }
}

// Event Listener - dijalankan setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded untuk pastikan HTML sudah dimuat
    
    // Event listener untuk tombol Tambah
    document.getElementById('btnTambah').addEventListener('click', tambahPegawai); // Click event memanggil fungsi tambahPegawai
    
    // Event listener untuk tombol Reset
    document.getElementById('btnReset').addEventListener('click', resetData); // Click event memanggil fungsi resetData
    
    // Event listener untuk tombol Enter pada input nama
    document.getElementById('namaPegawai').addEventListener('keypress', function(e) { // Keypress event
        if (e.key === 'Enter') { // Jika tombol yang ditekan adalah Enter
            e.preventDefault(); // Cegah behavior default (submit form)
            tambahPegawai(); // Panggil fungsi tambah pegawai
        }
    });
    
    // Event listener untuk tombol Enter pada input gaji
    document.getElementById('gajiPokok').addEventListener('keypress', function(e) { // Keypress event
        if (e.key === 'Enter') { // Jika tombol yang ditekan adalah Enter
            e.preventDefault(); // Cegah behavior default
            tambahPegawai(); // Panggil fungsi tambah pegawai
        }
    });
    
    // Tampilkan data awal (kosong)
    updateTampilan(); // Render tampilan pertama kali
});