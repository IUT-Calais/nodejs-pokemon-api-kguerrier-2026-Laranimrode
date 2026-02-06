/*
  Warnings:

  - You are about to drop the column `pokedexId` on the `PokemonCard` table. All the data in the column will be lost.
  - Added the required column `pokedexID` to the `PokemonCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PokemonCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokedexID" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "lifePoints" INTEGER NOT NULL,
    "size" REAL,
    "weight" REAL,
    "imageUrl" TEXT,
    CONSTRAINT "PokemonCard_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PokemonCard" ("id", "imageUrl", "lifePoints", "name", "size", "typeId", "weight") SELECT "id", "imageUrl", "lifePoints", "name", "size", "typeId", "weight" FROM "PokemonCard";
DROP TABLE "PokemonCard";
ALTER TABLE "new_PokemonCard" RENAME TO "PokemonCard";
CREATE UNIQUE INDEX "PokemonCard_name_key" ON "PokemonCard"("name");
CREATE UNIQUE INDEX "PokemonCard_pokedexID_key" ON "PokemonCard"("pokedexID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
