function hitungLuasSegitiga() {
    // Ambil nilai alas dan tinggi dari input
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Hitung luas segitiga
    var luas = 0.5 * alas * tinggi;

    // Tampilkan hasil
    document.getElementById('hasilLuas').innerHTML = 'Luas segitiga: ' + luas;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
    // Ambil nilai sisi-sisi dari input
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    // Hitung keliling segitiga
    var keliling = sisi1 + sisi2 + sisi3;

    // Tampilkan hasil
    document.getElementById('hasilKeliling').innerHTML = 'Keliling segitiga: ' + keliling;
}

// Event listener untuk tombol hitung luas
document.getElementById('hitungLuas').addEventListener('click', hitungLuasSegitiga);

// Event listener untuk tombol hitung keliling
document.getElementById('hitungKeliling').addEventListener('click', hitungKelilingSegitiga);