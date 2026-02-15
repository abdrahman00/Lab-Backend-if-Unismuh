# Laboratorium Informatika, Universitas Muhammadiyah Makassar

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

---

# Panduan Lengkap: Backend REST API dengan NestJS & Prisma

> Seri tutorial membangun backend REST API untuk aplikasi blog **"Median"** (klon sederhana Medium) menggunakan **NestJS**, **Prisma**, dan **PostgreSQL**.

---

## Daftar Chapter

| # | Chapter | Topik Utama | Link |
|---|---------|-------------|------|
| 1 | **Membangun REST API** | Setup NestJS, PostgreSQL, Prisma, CRUD Articles, Swagger | [:book: Buka Chapter 1](./chapter-1/README.md) |
| 2 | **Validasi Input & Error Handling** | ValidationPipe, class-validator, ParseIntPipe, Exception Filter | [:book: Buka Chapter 2](./chapter-2/README.md) |
| 3 | **Data Relasional & User Management** | Model User, Relasi One-to-Many, CRUD Users, Sembunyikan Password | [:book: Buka Chapter 3](./chapter-3/README.md) |
| 4 | **Authentication (JWT & Bcrypt)** | Passport, JWT Token, Auth Guard, Bcrypt Hashing, Swagger Auth | [:book: Buka Chapter 4](./chapter-4/README.md) |

---

## Apa yang Akan Kamu Bangun?

```
+----------------------------------------------+
|                MEDIAN API                     |
|                                               |
|   Articles   -> CRUD + Relasi ke Author       |
|   Users      -> CRUD + Password Hashing       |
|   Auth       -> Login + JWT Token             |
|   Swagger    -> Dokumentasi API Otomatis      |
|                                               |
|   Tech Stack:                                 |
|   - NestJS      (Framework)                   |
|   - Prisma      (ORM)                         |
|   - PostgreSQL  (Database)                    |
|   - Swagger     (API Docs)                    |
|   - Passport    (Authentication)              |
|   - Docker      (PostgreSQL Container)        |
+----------------------------------------------+
```

---

## Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **NestJS** | Framework backend Node.js |
| **Prisma** | ORM (Object-Relational Mapper) |
| **PostgreSQL** | Database relasional |
| **Swagger/OpenAPI** | Dokumentasi API otomatis |
| **TypeScript** | Bahasa pemrograman |
| **Docker** | Container untuk PostgreSQL |
| **Passport** | Library authentication |
| **JWT** | Token-based authentication |
| **Bcrypt** | Password hashing |
| **class-validator** | Validasi input |

---

## Prasyarat

Sebelum memulai, pastikan kamu sudah menginstal:

| Software | Versi Minimum | Cek Instalasi |
|----------|---------------|---------------|
| **Node.js** | v14+ | `node --version` |
| **npm** | v6+ | `npm --version` |
| **Docker** | v20+ | `docker --version` |
| **Docker Compose** | v2.0+ | `docker-compose --version` |
| **VS Code** | Latest | - |

---

## Cara Menjalankan Project

### **Quick Start (Paling Mudah!)**

Gunakan script helper untuk menjalankan project dengan satu command:

```bash
# Start semua service (database + aplikasi)
./manage.sh start

# Lihat logs
./manage.sh logs

# Stop semua service
./manage.sh stop
```

**Lihat semua commands:**
```bash
./manage.sh
```

---

### **Opsi 1: Menggunakan Docker (Recommended)**

Jalankan semua service (database + aplikasi) sekaligus dengan satu command:

```bash
# Production mode
docker-compose up -d

# Development mode (dengan hot reload)
docker-compose -f docker-compose.dev.yml up -d

# Lihat logs
docker-compose logs -f app

# Stop semua service
docker-compose down
```

Aplikasi akan berjalan di:
- **API**: http://localhost:3021
- **Swagger Documentation**: http://localhost:3021/api
- **PostgreSQL**: localhost:5432

**Keuntungan menggunakan Docker:**
- Tidak perlu install PostgreSQL secara manual
- Tidak perlu export DATABASE_URL
- Semua environment variable sudah ter-configure
- Database dan aplikasi berjalan otomatis setelah Docker start
- Migrations dijalankan otomatis saat container start
- Consistent environment untuk development dan production

---

### **Opsi 2: Menjalankan Secara Manual (Local Development)**

1. **Start Database PostgreSQL**
   ```bash
   docker-compose up -d db
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   
   Buat file `.env` di root project:
   ```env
   DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/median-db"
   JWT_SECRET="your-secret-key-change-this-in-production"
   ```

4. **Generate Prisma Client & Run Migrations**
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

5. **Seed Database (Optional)**
   ```bash
   npm run seed
   ```

6. **Start Development Server**
   ```bash
   npm run start:dev
   ```

Aplikasi akan berjalan di http://localhost:3021

---

## :hammer_and_wrench: Commands Berguna

```bash
# Database
docker-compose up -d db              # Start db saja
docker-compose down                   # Stop all service
docker-compose down -v                # Stop dan hapus volumes (reset db)

# Prisma
npx prisma studio                     # open Prisma Studio (Db GUI)
npx prisma migrate dev --name init    # create migration baru
npx prisma migrate reset              # reset db & run seed
npx prisma generate                   # generate Prisma Client

# Development
npm run start:dev                     # start dengan hot reload
npm run build                         # build production
npm run start                         # start production build

# Docker
docker-compose logs -f app            # cek logs aplikasi
docker-compose logs -f db             # cek logs db
docker-compose restart app            # restart aplikasi saja
docker-compose exec app sh            # masuk ke container aplikasi
docker-compose exec db psql -U myuser -d median-db  # masuk ke PostgreSQL
```

---

## Testing API

**User test yang tersedia (setelah seed):**
- Email: `john@example.com`
- Password: `password123`

**Cara test dengan curl:**

```bash
# 1. Register user baru
curl -X POST http://localhost:3021/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane man","email":"jane@example.com","password":"Pas$12"}'

# 2. Login & dapatkan token
curl -X POST http://localhost:3021/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane@example.com","password":"Pas$12"}'

# 3. Gunakan token untuk akses protected endpoint
curl -X GET http://localhost:3021/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

**Atau gunakan Swagger UI:**
Buka http://localhost:3021/api untuk testing!

---

## Cara Menggunakan Tutorial Ini

1. **Ikuti secara berurutan** - Setiap chapter membangun di atas chapter sebelumnya
2. **Ketik kode sendiri** - Jangan copy-paste, ketik ulang agar lebih paham
3. **Eksperimen** - Coba ubah kode dan lihat apa yang terjadi
4. **Baca komentar** - Setiap kode dilengkapi penjelasan di komentar

---

## Ringkasan per Chapter

### Chapter 1: Membangun REST API
> Setup proyek dari nol hingga REST API yang berfungsi penuh dengan dokumentasi Swagger.

**Yang dipelajari:** NestJS CLI, Docker PostgreSQL, Prisma schema & migration, CRUD operations, Swagger/OpenAPI

### Chapter 2: Validasi Input & Error Handling
> Membuat API lebih robust dengan validasi input dan penanganan error yang baik.

**Yang dipelajari:** ValidationPipe, class-validator decorators, ParseIntPipe, Exception Filters, PrismaClientExceptionFilter

### Chapter 3: Data Relasional & User Management
> Menambahkan model User, relasi dengan Article, dan menyembunyikan data sensitif.

**Yang dipelajari:** Prisma relations, CRUD Users, ClassSerializerInterceptor, @Exclude decorator

### Chapter 4: Authentication (JWT & Bcrypt)
> Mengamankan API dengan sistem login dan token-based authentication.

**Yang dipelajari:** Passport.js, JWT, Auth Guards, bcrypt password hashing, Swagger Bearer Auth

---

## Progress Laporan Praktikum

> **Instruksi:** Centang chapter yang sudah selesai dikerjakan. Detail checklist ada di masing-masing chapter.

### Chapter 1 — Membangun REST API
- [x] Persiapan lingkungan (Node.js, Docker, VS Code)
- [x] Setup proyek NestJS
- [x] Setup database PostgreSQL (Docker)
- [x] Setup Prisma (install, init, schema)
- [x] Model data & migrasi database
- [x] Seed database dengan data awal
- [x] Membuat Prisma Service & Module
- [x] Setup Swagger
- [x] Implementasi CRUD Articles (6 endpoint)
- [x] Konfigurasi Swagger response types
- [x] ** [Lihat detail checklist →](./chapter-1/README.md#-laporan-praktikum--chapter-1)**

### Chapter 2 — Validasi Input & Error Handling
- [x] Validasi input dengan `ValidationPipe` & `class-validator`
- [x] Whitelist filtering (buang field yang tidak diinginkan)
- [x] Transformasi parameter URL dengan `ParseIntPipe`
- [x] Error handling dengan `NotFoundException`
- [x] Membuat `PrismaClientExceptionFilter` (P2002, P2025)
- [x] ** [Lihat detail checklist →](./chapter-2/README.md#-laporan-praktikum--chapter-2)**

### Chapter 3 — Data Relasional & User Management
- [x] Membuat model `User` dan relasi one-to-many dengan `Article`
- [x] Migrasi dan seed data user
- [x] Implementasi CRUD Users (5 endpoint)
- [x] Menyembunyikan password dengan `@Exclude()` & `ClassSerializerInterceptor`
- [x] Menampilkan relasi author di response Article
- [x] ** [Lihat detail checklist →](./chapter-3/README.md#-laporan-praktikum--chapter-3)**

### Chapter 4 — Authentication (JWT & Bcrypt)
- [x] Setup Auth module dengan Passport & JWT
- [x] Membuat endpoint `POST /auth/login`
- [x] Membuat JWT Strategy & Auth Guard
- [x] Melindungi endpoint Users dengan `@UseGuards`
- [x] Integrasi Bearer Auth di Swagger
- [x] Hashing password dengan bcrypt
- [x] Update login untuk bcrypt
- [x] ** [Lihat detail checklist →](./chapter-4/README.md#-laporan-praktikum--chapter-4)**

###  Status Keseluruhan
- [x] **Chapter 1 selesai**
- [x] **Chapter 2 selesai**
- [x] **Chapter 3 selesai**
- [x] **Chapter 4 selesai**
- [x] ** SEMUA CHAPTER SELESAI**

| Item | Keterangan |
|------|------------|
| Nama | Abd Rahman Wahid |
| NIM | 105841116522 |
| Tanggal Mulai | 12 Februari 2026 |
| Tanggal Selesai | 16 Februari 2026 |
| Tanda Tangan | https://github.com/abdrahman00/Lab-Backend-if-Unismuh.git |

---

## Referensi

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Swagger/OpenAPI](https://swagger.io/)
- [Passport.js](https://www.passportjs.org/)
