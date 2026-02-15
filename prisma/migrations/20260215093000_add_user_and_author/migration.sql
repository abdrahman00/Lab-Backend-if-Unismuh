/*
  Warnings:

  - Added the required column `authorId` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable (User first, before altering Article)
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Insert default user for existing articles
INSERT INTO "User" (name, email, password, "updatedAt") VALUES ('Admin', 'admin@example.com', 'hashed_password', CURRENT_TIMESTAMP);

-- AlterTable (with SET DEFAULT for existing rows)
ALTER TABLE "Article" ADD COLUMN "authorId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Drop the DEFAULT constraint after migration (optional, or keep it)
ALTER TABLE "Article" ALTER COLUMN "authorId" DROP DEFAULT;

