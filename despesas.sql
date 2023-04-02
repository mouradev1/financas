CREATE SCHEMA "despesas";

CREATE TABLE "despesas"."financa" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "id_categoria" int NOT NULL,
  "id_usuario" int NOT NULL,
  "despesa_descricao" varchar(30) NOT NULL,
  "valor" numeric(15,2) NOT NULL,
  "status" bool,
  "data_despesa" date,
  "data_pgto_despesa" timestamp
);

CREATE TABLE "despesas"."categoria" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "name" varchar(100) NOT NULL
);

CREATE TABLE "despesas"."usuario" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "name" varchar(50) NOT NULL,
  "password" varchar(120) NOT NULL,
  "nivel" int NOT NULL
);

ALTER TABLE "despesas"."financa" ADD FOREIGN KEY ("id_categoria") REFERENCES "despesas"."categoria" ("id");

ALTER TABLE "despesas"."financa" ADD FOREIGN KEY ("id_usuario") REFERENCES "despesas"."usuario" ("id");