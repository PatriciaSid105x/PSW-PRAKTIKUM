/*Nama  : Chelsea Eunike Limbong
  NIM   : 41425043
  Prodi : DIV - Teknologi Rekayasa PErangkat Lunak*/

let keranjang = []; // Array untuk menyimpan daftar belanja

function tambahKeKeranjang(nama, harga) { // Fungsi tambah produk
  keranjang.push({ nama, harga }); // Tambahkan produk ke array
  tampilkanKeranjang(); // Panggil fungsi tampilkan keranjang
}

function tampilkanKeranjang() { // Fungsi menampilkan isi keranjang
  const daftar = document.getElementById("daftarKeranjang"); // Ambil elemen daftar
  daftar.innerHTML = ""; // Kosongkan isi lama

  let total = 0; // Variabel total harga
  keranjang.forEach((item, index) => { // Ulang tiap item
    const li = document.createElement("li"); // Buat elemen list baru
    li.textContent = `${item.nama} - Rp ${item.harga}`; // Tampilkan nama dan harga
    const hapusBtn = document.createElement("button"); // Buat tombol hapus
    hapusBtn.textContent = "Hapus"; // Teks tombol
    hapusBtn.onclick = () => hapusItem(index); // Saat diklik, hapus item ini
    li.appendChild(hapusBtn); // Tambah tombol ke dalam li
    daftar.appendChild(li); // Tambah li ke daftar
    total += item.harga; // Tambah harga ke total
  });

  document.getElementById("totalHarga").textContent = "Total: Rp " + total; // Tampilkan total
}

function hapusItem(index) { // Fungsi menghapus 1 item dari keranjang
  keranjang.splice(index, 1); // Hapus item ke-index tertentu
  tampilkanKeranjang(); // Perbarui tampilan
}

function checkout() { // Fungsi checkout
  if (keranjang.length === 0) { // Jika keranjang kosong
    alert("Keranjang masih kosong!"); // Tampilkan pesan
    return; // Hentikan fungsi
  }

  alert("Terima kasih telah berbelanja di LIMBONG SHOP!"); // Pesan sukses
  keranjang = []; // Kosongkan keranjang
  tampilkanKeranjang(); // Refresh tampilan
}
