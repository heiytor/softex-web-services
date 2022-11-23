-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "inventory" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_name_key" ON "Book"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Book_ISBN_key" ON "Book"("ISBN");
