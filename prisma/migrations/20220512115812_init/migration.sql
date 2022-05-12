-- CreateTable
CREATE TABLE "Plane" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "pilotId" TEXT,
    CONSTRAINT "Plane_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "departingAirport" TEXT NOT NULL,
    "arrivingAirport" TEXT NOT NULL,
    "distance" INTEGER NOT NULL DEFAULT 0,
    "objective" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "objectiveQuantity" TEXT NOT NULL,
    "reward" INTEGER NOT NULL DEFAULT 0,
    "pilotId" TEXT,
    CONSTRAINT "Mission_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pilot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "age" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,
    "totalDistance" INTEGER NOT NULL DEFAULT 0,
    "totalCargo" INTEGER NOT NULL DEFAULT 0,
    "totalPassenger" INTEGER NOT NULL DEFAULT 0
);
