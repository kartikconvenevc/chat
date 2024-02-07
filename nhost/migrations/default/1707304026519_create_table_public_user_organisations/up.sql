CREATE TABLE "public"."user_organisations" ("id" bigserial NOT NULL, "orgn_id" bigint, "uuid" uuid, "status" text DEFAULT 'active', PRIMARY KEY ("id") );
