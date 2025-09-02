/*
  Warnings:

  - You are about to drop the column `maxIntegrantes` on the `GrupoPorPersona` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Grupo" ADD COLUMN     "maxIntegrantes" INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE "public"."GrupoPorPersona" DROP COLUMN "maxIntegrantes";
