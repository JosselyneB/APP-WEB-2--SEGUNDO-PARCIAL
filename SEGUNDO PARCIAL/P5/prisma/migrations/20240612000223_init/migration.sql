/*
  Warnings:

  - The primary key for the `Equipo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Partido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Torneo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Partido" DROP CONSTRAINT "Partido_equipoLocalId_fkey";

-- DropForeignKey
ALTER TABLE "Partido" DROP CONSTRAINT "Partido_torneoId_fkey";

-- AlterTable
ALTER TABLE "Equipo" DROP CONSTRAINT "Equipo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "equipo_id_seq";

-- AlterTable
ALTER TABLE "Partido" DROP CONSTRAINT "Partido_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "equipoLocalId" SET DATA TYPE TEXT,
ALTER COLUMN "torneoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Partido_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Torneo" DROP CONSTRAINT "Torneo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Torneo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "torneo_id_seq";

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_equipoLocalId_fkey" FOREIGN KEY ("equipoLocalId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_torneoId_fkey" FOREIGN KEY ("torneoId") REFERENCES "Torneo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
