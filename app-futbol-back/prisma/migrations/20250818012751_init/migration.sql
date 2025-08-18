-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Grupo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GrupoPorPersona" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,

    CONSTRAINT "GrupoPorPersona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."promedio" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,

    CONSTRAINT "promedio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_code_key" ON "public"."Grupo"("code");

-- AddForeignKey
ALTER TABLE "public"."GrupoPorPersona" ADD CONSTRAINT "GrupoPorPersona_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GrupoPorPersona" ADD CONSTRAINT "GrupoPorPersona_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "public"."Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."promedio" ADD CONSTRAINT "promedio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."promedio" ADD CONSTRAINT "promedio_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "public"."Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
