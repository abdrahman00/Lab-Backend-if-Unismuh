##  Laporan Praktikum — Chapter 4

> **Instruksi:** Centang setiap langkah yang sudah selesai dikerjakan sebagai bukti laporan praktikum.
> Ubah `[ ]` menjadi `[x]` untuk menandai selesai.

### Part A: Setup Auth Module
- [x] Membuat resource Auth (`npx nest generate resource` → auth, REST API, No CRUD)
- [x] Menginstal dependensi Passport & JWT (`@nestjs/passport`, `passport`, `@nestjs/jwt`, `passport-jwt`)
- [x] Menginstal type definitions (`@types/passport-jwt`)
- [x] Mengonfigurasi `AuthModule` dengan `PassportModule` dan `JwtModule.register()`
- [x] Mengatur `jwtSecret` dan `expiresIn: '24h'`

### Part B: Login Endpoint
- [x] Membuat `LoginDto` dengan validasi (`@IsEmail`, `@IsNotEmpty`, `@MinLength`)
- [x] Membuat `AuthEntity` dengan field `accessToken`
- [x] Mengimplementasikan `AuthService.login()` — cari user, verifikasi password, generate token
- [x] Membuat `POST /auth/login` di `AuthController`
- [x] Menambahkan `@ApiTags('auth')` dan `@ApiOkResponse({ type: AuthEntity })`
- [x] Menguji login di Swagger — mengirim email & password yang benar
- [x] Menguji login — mengirim email yang tidak ada → melihat error 404
- [x] Menguji login — mengirim password yang salah → melihat error 401

### Part C: Melindungi Endpoint dengan JWT
- [x] Membuat `JwtStrategy` (extends `PassportStrategy`)
- [x] Mengonfigurasi `ExtractJwt.fromAuthHeaderAsBearerToken()`
- [x] Mengimplementasikan method `validate()` di `JwtStrategy`
- [x] Menambahkan `JwtStrategy` ke `providers` di `AuthModule`
- [x] Mengimpor `UsersModule` di `AuthModule`
- [x] Menambahkan `exports: [UsersService]` di `UsersModule`
- [x] Membuat `JwtAuthGuard` (extends `AuthGuard('jwt')`)
- [x] Menerapkan `@UseGuards(JwtAuthGuard)` ke `GET /users`
- [x] Menerapkan `@UseGuards(JwtAuthGuard)` ke `GET /users/:id`
- [x] Menerapkan `@UseGuards(JwtAuthGuard)` ke `PATCH /users/:id`
- [x] Menerapkan `@UseGuards(JwtAuthGuard)` ke `DELETE /users/:id`
- [x] Memverifikasi `POST /users` tetap terbuka (tanpa guard)
- [x] Menguji — mengakses `GET /users` tanpa token → melihat error 401

### Part D: Integrasi Auth di Swagger
- [x] Menambahkan `.addBearerAuth()` di `DocumentBuilder` (`main.ts`)
- [x] Menambahkan `@ApiBearerAuth()` ke setiap endpoint yang dilindungi
- [x] Menguji di Swagger — login → copy token → klik Authorize → paste token
- [x] Menguji — mengakses endpoint yang dilindungi setelah authorize → berhasil 200

### Part E: Hashing Password dengan Bcrypt
- [x] Menginstal `bcrypt` dan `@types/bcrypt`
- [x] Memperbarui `UsersService.create()` — hash password sebelum simpan
- [x] Memperbarui `UsersService.update()` — hash password jika diubah
- [x] Memperbarui `prisma/seed.ts` — gunakan `bcrypt.hash()` untuk password
- [x] Menjalankan seed ulang (`npx prisma db seed`)
- [x] Memperbarui `AuthService.login()` — gunakan `bcrypt.compare()`
- [x] Menguji login setelah bcrypt — memverifikasi login masih berfungsi
- [x] Menguji — membuat user baru dan memverifikasi password tersimpan sebagai hash

### Verifikasi Akhir
- [x] Login berhasil dan mendapatkan JWT token
- [x] Endpoint yang dilindungi menolak request tanpa token (401)
- [x] Endpoint yang dilindungi menerima request dengan token valid (200)
- [x] Password tersimpan sebagai hash di database (bukan plain text)
- [x] Swagger Bearer Auth berfungsi dengan benar

###  Status Chapter 4
- [x] **SEMUA LANGKAH SELESAI**

| Item | Keterangan |
|------|------------|
| Nama | Abd Rahman Wahid |
| NIM | 105841116522 |
| Tanggal | 16 Februari 2026 |
| Tanda Tangan | https://github.com/abdrahman00/Lab-Backend-if-Unismuh.git |
