-- CreateTable
CREATE TABLE "Airport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ident" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude_deg" REAL NOT NULL DEFAULT 0.0,
    "longitude_deg" REAL NOT NULL DEFAULT 0.0,
    "elevation_ft" INTEGER NOT NULL DEFAULT 0,
    "continent" TEXT NOT NULL,
    "iso_country" TEXT NOT NULL,
    "iso_region" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "scheduled_service" TEXT NOT NULL,
    "gps_code" TEXT NOT NULL,
    "iata_code" TEXT NOT NULL,
    "local_code" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "missionId" TEXT,
    CONSTRAINT "Airport_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
