-- CreateTable
CREATE TABLE "enuns" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "db_periferico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "db_periferico_especificacao" (
    "id_periferico" INTEGER NOT NULL,
    "id_especificacao" INTEGER NOT NULL,
    "especificacao" TEXT NOT NULL,
    "especificacao_descricao" TEXT NOT NULL,

    PRIMARY KEY ("id_especificacao", "id_periferico"),
    CONSTRAINT "db_periferico_especificacao_id_periferico_fkey" FOREIGN KEY ("id_periferico") REFERENCES "db_periferico" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "db_periferico_imagem" (
    "id_periferico" INTEGER NOT NULL,
    "id_imagem" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id_imagem", "id_periferico"),
    CONSTRAINT "db_periferico_imagem_id_periferico_fkey" FOREIGN KEY ("id_periferico") REFERENCES "db_periferico" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "db_periferico_avaliacao" (
    "id_periferico" INTEGER NOT NULL,
    "id_avaliacao" INTEGER NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "descricao_avaliacao" TEXT NOT NULL,

    PRIMARY KEY ("id_avaliacao", "id_periferico"),
    CONSTRAINT "db_periferico_avaliacao_id_periferico_fkey" FOREIGN KEY ("id_periferico") REFERENCES "db_periferico" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
