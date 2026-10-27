// ===== FITUR 1: PILIH WARNA BENANG =====

// 1. Ambil elemen dari HTML
const swatches = document.querySelectorAll('.swatch');
const previewBox = document.querySelector('.preview-box');
const namaWarna = document.querySelector('#nama-warna');

// 2. Pasang event klik di setiap lingkaran
swatches.forEach(function (swatch) {
    swatch.addEventListener('click', function () {

        // 3a. Hapus class aktif dari semua lingkaran
        swatches.forEach(function (s) {
            s.classList.remove('aktif');
        });

        // 3b. Tambahkan class aktif ke lingkaran yang diklik
        swatch.classList.add('aktif');

        // 3c. Ganti warna tas
        previewBox.style.backgroundColor = swatch.dataset.color;

        // 3d. Ganti tulisan nama warna
        namaWarna.textContent = swatch.dataset.name;
    });
});
// ===== FITUR 2: POPUP FOTO MODEL =====

// 1. Ambil elemen
const fotoKartu = document.querySelectorAll('.kartu img');
const popup = document.querySelector('#popup');
const popupGambar = document.querySelector('#popup-gambar');
const popupJudul = document.querySelector('#popup-judul');
const tombolTutup = document.querySelector('#popup-tutup');

// 2. Klik foto -> buka popup
fotoKartu.forEach(function (foto) {
    foto.addEventListener('click', function () {
        const kartu = foto.closest('.kartu');
        const namaTas = kartu.querySelector('h3').textContent;

        popupGambar.src = foto.src;
        popupGambar.alt = foto.alt;
        popupJudul.textContent = namaTas;

        popup.classList.add('tampil');
    });
});

// 3. Klik tombol x -> tutup popup
tombolTutup.addEventListener('click', function () {
    popup.classList.remove('tampil');
});

// 4. Klik area gelap di luar kotak -> tutup popup
popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.classList.remove('tampil');
    }
});
// ===== FITUR 3: HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const linkMenu = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('tampil');
});

linkMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('tampil');
    });
});
// ===== FITUR 4: FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
    const pertanyaan = item.querySelector('.faq-question');

    pertanyaan.addEventListener('click', function () {
        item.classList.toggle('aktif');
    });
});
