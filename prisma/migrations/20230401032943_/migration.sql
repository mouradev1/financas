-- CreateTable
CREATE TABLE "categoria" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financa" (
    "id" SERIAL NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "despesa_descricao" VARCHAR(30) NOT NULL,
    "valor" DECIMAL(15,3) NOT NULL,
    "status" BOOLEAN,
    "data_despesa" DATE,
    "data_pgto_despesa" TIMESTAMP(6),

    CONSTRAINT "financa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "financa" ADD CONSTRAINT "financa_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "financa" ADD CONSTRAINT "financa_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
