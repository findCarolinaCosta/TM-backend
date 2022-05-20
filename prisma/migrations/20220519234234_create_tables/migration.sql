/*
  Warnings:

  - You are about to drop the column `tags` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `status` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `tags`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` INTEGER NOT NULL;
