/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `Grupo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Grupo" DROP COLUMN "isAdmin";

-- AlterTable
ALTER TABLE "public"."GrupoPorPersona" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
