// 1. Deklarasi Variabel
const nama = "Mohamad Lutfi Ibrahim";
const nim = "05301425111";
let semester = 3;
const aktif = true;
const hobi = ["Basketball", "Badminton", "Vibe Coding"];

// 2. Output Ke Console
console.log("Nama: ", nama);
console.log("Tipe Data Semester:", typeof semester);
console.log("Tipe Data Aktif:", typeof aktif);
console.log("Hobi Pertama:", hobi[0]);

// 3. Output Ke Halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML =`
    NIM: ${nim}<br>
    Semester: ${semester}<br>
    Status: ${aktif ? "Aktif" : "Cuti"}<br>
    Hobi: ${hobi.join(", ")}`;