##  Laporan Praktikum — Chapter 1

> **Instruksi:** Centang setiap langkah yang sudah selesai dikerjakan sebagai bukti laporan praktikum.
> Ubah `[ ]` menjadi `[x]` untuk menandai selesai.

### Persiapan Lingkungan
- [x] Menginstal Node.js dan npm
- [x] Menginstal Docker Desktop
- [x] Menginstal ekstensi Prisma di VS Code

### Setup Proyek NestJS
- [x] Membuat proyek baru dengan `npx @nestjs/cli new .`
- [x] Menjalankan server development (`npm run start:dev`)
- [x] Mengakses `http://localhost:3021` dan melihat "Hello World!"

### Setup Database PostgreSQL
- [x] Membuat file `docker-compose.yml`
- [x] Menjalankan container PostgreSQL dengan `docker-compose up`
- [x] Memverifikasi database berjalan di port 5432

### Setup Prisma
- [x] Menginstal Prisma CLI (`npm install -D prisma`)
- [x] Menginisialisasi Prisma (`npx prisma init`)
- [x] Mengonfigurasi `DATABASE_URL` di file `.env`

### Model Data & Migrasi
- [x] Membuat model `Article` di `prisma/schema.prisma`
- [x] Menjalankan migrasi pertama (`npx prisma migrate dev --name "init"`)
- [x] Memverifikasi tabel `Article` berhasil dibuat

### Seed Database
- [x] Membuat file `prisma/seed.ts`
- [x] Menambahkan konfigurasi seed di `package.json`
- [x] Menjalankan seed (`npx prisma db seed`)
- [x] Memverifikasi data berhasil masuk ke database

### Prisma Service
- [x] Membuat Prisma module (`npx nest generate module prisma`)
- [x] Membuat Prisma service (`npx nest generate service prisma`)
- [x] Mengonfigurasi `PrismaService` extends `PrismaClient`
- [x] Menambahkan `PrismaService` ke `exports` di `PrismaModule`

### Swagger
- [x] Menginstal dependensi Swagger (`@nestjs/swagger`, `swagger-ui-express`)
- [x] Mengonfigurasi Swagger di `main.ts`
- [x] Mengakses Swagger UI di `http://localhost:3021/api`

### CRUD Articles
- [x] Membuat resource Articles (`npx nest generate resource`)
- [x] Mengimpor `PrismaModule` di `ArticlesModule`
- [x] Mengimplementasikan `POST /articles` (Create)
- [x] Mengimplementasikan `GET /articles` (Read All - Published)
- [x] Mengimplementasikan `GET /articles/drafts` (Read All - Drafts)
- [x] Mengimplementasikan `GET /articles/:id` (Read One)
- [x] Mengimplementasikan `PATCH /articles/:id` (Update)
- [x] Mengimplementasikan `DELETE /articles/:id` (Delete)

### Swagger Response Types
- [x] Membuat `ArticleEntity` dengan decorator `@ApiProperty`
- [x] Menambahkan `@ApiOkResponse` / `@ApiCreatedResponse` ke setiap endpoint
- [x] Menambahkan `@ApiTags('articles')` ke controller
- [x] Memverifikasi response types muncul di Swagger UI

### Status Chapter 1
- [x] **SEMUA LANGKAH SELESAI** — Chapter 1 telah dikerjakan seluruhnya

| Item | Keterangan |
|------|------------|
| Nama | Abd Rahman Wahid |
| NIM | 105841116522 |
| Tanggal | 16 Februari 2026 |
| Tanda Tangan | https://github.com/abdrahman00/Lab-Backend-if-Unismuh.git |
