CREATE TABLE "public"."organisation_roles" ("id" bigserial NOT NULL, "name" text, "access" jsonb, "status" text DEFAULT 'active', PRIMARY KEY ("id") );
