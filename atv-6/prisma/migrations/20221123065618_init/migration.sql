-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "classroom" INTEGER NOT NULL,
    "matriculation" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_matriculation_key" ON "Student"("matriculation");
