CREATE TABLE "public"."access_managment" ("id" bigserial NOT NULL, "name" text, "created_at" timestamptz DEFAULT now(), "status" text, "free_column" text, PRIMARY KEY ("id") );
