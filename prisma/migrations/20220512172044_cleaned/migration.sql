/*
  Warnings:

  - You are about to drop the column `continent` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `elevation_ft` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `gps_code` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `iata_code` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `iso_country` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `iso_region` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `local_code` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `municipality` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `scheduled_service` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Airport` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Airport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ident" TEXT NOT NULL,
    "latitude_deg" REAL NOT NULL DEFAULT 0.0,
    "longitude_deg" REAL NOT NULL DEFAULT 0.0,
    "missionId" TEXT,
    CONSTRAINT "Airport_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Airport" ("id", "ident", "latitude_deg", "longitude_deg", "missionId") SELECT "id", "ident", "latitude_deg", "longitude_deg", "missionId" FROM "Airport";
DROP TABLE "Airport";
ALTER TABLE "new_Airport" RENAME TO "Airport";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
