## 📝 Laporan Praktikum — Chapter 3

> **Instruksi:** Centang setiap langkah yang sudah selesai dikerjakan sebagai bukti laporan praktikum.
> Ubah `[ ]` menjadi `[x]` untuk menandai selesai.

### Part A: Model User & Relasi
- [x] Menambahkan model `User` di `prisma/schema.prisma`
- [x] Menambahkan field `authorId` dan relasi `author` di model `Article`
- [x] Menjalankan migrasi (`npx prisma migrate dev --name "add-user-model"`)
- [x] Memverifikasi tabel `User` berhasil dibuat di database
- [x] Memperbarui `prisma/seed.ts` dengan data user (Sabin & Alex)
- [x] Menghubungkan artikel dengan author di seed script
- [x] Menjalankan seed ulang (`npx prisma db seed`)
- [x] Memverifikasi data user dan relasi berhasil masuk ke database

### Part B: CRUD Users
- [x] Membuat resource Users (`npx nest generate resource`)
- [x] Mengimpor `PrismaModule` di `UsersModule`
- [x] Membuat `UserEntity` dengan decorator `@ApiProperty`
- [x] Membuat `CreateUserDto` dengan validasi (`@IsNotEmpty`, `@IsEmail`, dll)
- [x] Mengimplementasikan `POST /users` (Create)
- [x] Mengimplementasikan `GET /users` (Read All)
- [x] Mengimplementasikan `GET /users/:id` (Read One)
- [x] Mengimplementasikan `PATCH /users/:id` (Update)
- [x] Mengimplementasikan `DELETE /users/:id` (Delete)
- [x] Menambahkan `@ApiTags('users')` dan response types ke controller
- [x] Menguji semua endpoint Users di Swagger

### Part C: Menyembunyikan Password
- [x] Menambahkan `@Exclude()` pada field `password` di `UserEntity`
- [x] Menambahkan constructor di `UserEntity` (`constructor(partial: Partial<UserEntity>)`)
- [x] Membungkus response dengan `new UserEntity(...)` di setiap method controller
- [x] Mengaktifkan `ClassSerializerInterceptor` secara global di `main.ts`
- [x] Menguji — memverifikasi password TIDAK muncul di response `GET /users`
- [x] Menguji — memverifikasi password TIDAK muncul di response `GET /users/:id`

### Part D: Relasi Author di Articles
- [x] Memperbarui `ArticleEntity` — menambahkan field `authorId` dan `author`
- [x] Memperbarui `ArticlesService.findOne` — menambahkan `include: { author: true }`
- [x] Memperbarui `ArticlesService.findAll` — menambahkan `include: { author: true }`
- [x] Memperbarui `ArticlesService.findDrafts` — menambahkan `include: { author: true }`
- [x] Menguji — memverifikasi field `author` muncul di response Article
- [x] Menguji — memverifikasi password author TIDAK muncul di response Article

### ✅ Status Chapter 3
- [x] **SEMUA LANGKAH SELESAI** — Chapter 3 telah dikerjakan seluruhnya

| Item | Keterangan |
|------|------------|
| Nama | Nur-Hidayat-FTI22E |
| NIM | 105841115422 |
| Tanggal | 15 Februari 2026 |
| Tanda Tangan | https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab.git |
