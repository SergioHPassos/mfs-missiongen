/*
  Warnings:

  - You are about to alter the column `totalDistance` on the `Pilot` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pilot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "age" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,
    "totalDistance" REAL NOT NULL DEFAULT 0,
    "totalCargo" INTEGER NOT NULL DEFAULT 0,
    "totalPassenger" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Pilot" ("age", "firstName", "id", "lastName", "middleName", "money", "totalCargo", "totalDistance", "totalPassenger") SELECT "age", "firstName", "id", "lastName", "middleName", "money", "totalCargo", "totalDistance", "totalPassenger" FROM "Pilot";
DROP TABLE "Pilot";
ALTER TABLE "new_Pilot" RENAME TO "Pilot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
