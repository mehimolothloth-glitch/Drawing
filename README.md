# Drawing Book 🎨

Aplikasi menggambar digital berbasis web (*client-side*) yang sederhana, interaktif, dan ringan. Proyek ini dibuat menggunakan HTML5 Canvas dan JavaScript untuk memungkinkan pengguna mengekspresikan kreativitas mereka langsung di browser, lengkap dengan sentuhan lokal yang unik.

🚀 **[Coba Live Demo](https://mehimolothloth-glitch.github.io/Drawing/)**

---

## 🌟 Fitur Utama

* **Kanvas Menggambar Interaktif:** Menggambar dengan mulus menggunakan mouse atau perangkat sentuh.
* **Kustomisasi Kuas (Brush):** Pengaturan ukuran kuas (*brush size*) yang dinamis untuk detail gambar yang berbeda.
* **Palet Warna:** Pilihan warna yang variatif untuk membuat karya yang penuh warna.
* **Desain Minimalis & Unik:** Antarmuka yang bersih dengan teks ikonik *"Wes Sak Karep / Sak Karepmu Lapo Ae"* yang memberikan kesan santai dan bebas bagi pengguna untuk menggambar apa saja.
* **100% Client-Side:** Semua aktivitas menggambar diproses langsung di browser Anda secara lokal tanpa penyimpanan server.

---

## 🛠️ Cara Kerja

Aplikasi ini sepenuhnya mengandalkan manipulasi elemen grafik dua dimensi (2D):

1. **Inisialisasi Kanvas:** Menggunakan elemen `<canvas>` HTML5 dengan konteks rendering `2d`.
2. **Pelacakan Event:** JavaScript mendengarkan *event* gerakan mouse (`mousedown`, `mousemove`, `mouseup`) untuk mendeteksi posisi koordinat dan mulai menggoreskan garis di kanvas.
3. **Kustomisasi Real-time:** Nilai dari input warna dan slider ukuran kuas langsung memperbarui properti `strokeStyle` dan `lineWidth` pada konteks canvas secara instan.

---

## 🚀 Memulai (Cara Menjalankan)

### Prasyarat

Anda hanya memerlukan browser web modern (seperti Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari).

### Menjalankan di Lokal (Komputer Anda)

1. **Clone repositori ini:**
```bash
   git clone [https://github.com/mehimolothloth-glitch/Drawing.git](https://github.com/mehimolothloth-glitch/Drawing.git)
2. Masuk ke direktori:
  bash
    cd Drawing
3. Buka proyek
  Cukup klik 2X file index.html untuk membukanya langsung di browser favorit anda.
