##  Laporan Praktikum — Chapter 2

> **Instruksi:** Centang setiap langkah yang sudah selesai dikerjakan sebagai bukti laporan praktikum.
> Ubah `[ ]` menjadi `[x]` untuk menandai selesai.

### Part A: Validasi Input
- [x] Menginstal `class-validator` dan `class-transformer`
- [x] Mengaktifkan `ValidationPipe` secara global di `main.ts`
- [x] Menambahkan decorator validasi ke `CreateArticleDto` (`@IsNotEmpty`, `@IsString`, `@IsBoolean`, dll)
- [x] Menguji validasi — mengirim body kosong dan melihat error 400
- [x] Menguji validasi — mengirim tipe data yang salah dan melihat error 400
- [x] Mengaktifkan opsi `whitelist: true` di `ValidationPipe`
- [x] Menguji whitelist — mengirim field tambahan dan memverifikasi field tersebut dibuang

### Part B: Transformasi Parameter
- [x] Menambahkan `ParseIntPipe` ke parameter `id` di endpoint `GET /articles/:id`
- [x] Menambahkan `ParseIntPipe` ke parameter `id` di endpoint `PATCH /articles/:id`
- [x] Menambahkan `ParseIntPipe` ke parameter `id` di endpoint `DELETE /articles/:id`
- [x] Menguji — mengirim `id` berupa string (contoh: `abc`) dan melihat error 400
- [x] Menguji — mengirim `id` berupa angka dan memverifikasi berhasil

### Part C: Error Handling
- [x] Menambahkan `NotFoundException` di `findOne` (ketika artikel tidak ditemukan)
- [x] Menguji — mengakses artikel yang tidak ada dan melihat error 404
- [x] Membuat file `PrismaClientExceptionFilter`
- [x] Menangani error `P2002` (Unique constraint violation) → 409 Conflict
- [x] Menangani error `P2025` (Record not found) → 404 Not Found
- [x] Mendaftarkan `PrismaClientExceptionFilter` secara global di `main.ts`
- [x] Menguji — membuat artikel dengan judul duplikat dan melihat error 409
- [x] Menguji — mengupdate/menghapus artikel yang tidak ada dan melihat error 404

### Verifikasi Akhir
- [x] Semua endpoint validasi berfungsi dengan benar
- [x] Error response menampilkan pesan yang jelas dan informatif
- [x] Tidak ada error 500 (Internal Server Error) yang tidak tertangani

###  Status Chapter 2
- [x] **SEMUA LANGKAH SELESAI**

| Item | Keterangan |
|------|------------|
| Nama | Abd Rahman Wahid |
| NIM | 105841116522 |
| Tanggal | 16 Februari 2026 |
| Tanda Tangan | https://github.com/abdrahman00/Lab-Backend-if-Unismuh.git |
