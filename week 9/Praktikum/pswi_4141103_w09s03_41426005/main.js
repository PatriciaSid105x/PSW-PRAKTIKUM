const greetingButton =
 document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
 alert('Hallo, Selamat Belajar Pengembangan Situs Web I!');
});

//week-09 sesi-02

const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = ["HTML", "CSS", "Audit", "Rias"];
for (const item of judul) console.log(item);

//week-09 sesi-03

console.log(hitungTotal(2, 10000));

const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },

];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);

{
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);
}
import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));