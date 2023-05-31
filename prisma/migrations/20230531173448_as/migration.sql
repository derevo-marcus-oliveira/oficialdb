-- CreateTable
CREATE TABLE "db_periferico_comentario" (
    "id_periferico" INTEGER NOT NULL,
    "id_comentario" INTEGER NOT NULL,
    "usuario_nome" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,

    PRIMARY KEY ("id_comentario", "id_periferico"),
    CONSTRAINT "db_periferico_comentario_id_periferico_fkey" FOREIGN KEY ("id_periferico") REFERENCES "db_periferico" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
