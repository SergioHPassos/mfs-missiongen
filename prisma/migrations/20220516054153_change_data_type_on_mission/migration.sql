/*
  Warnings:

  - You are about to alter the column `objectiveQuantity` on the `Mission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "departingAirport" TEXT NOT NULL,
    "arrivingAirport" TEXT NOT NULL,
    "distance" INTEGER NOT NULL DEFAULT 0,
    "objective" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "objectiveQuantity" INTEGER NOT NULL,
    "reward" INTEGER NOT NULL DEFAULT 0,
    "pilotId" TEXT,
    CONSTRAINT "Mission_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Mission" ("arrivingAirport", "departingAirport", "distance", "id", "objective", "objectiveQuantity", "pilotId", "reward", "type") SELECT "arrivingAirport", "departingAirport", "distance", "id", "objective", "objectiveQuantity", "pilotId", "reward", "type" FROM "Mission";
DROP TABLE "Mission";
ALTER TABLE "new_Mission" RENAME TO "Mission";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
