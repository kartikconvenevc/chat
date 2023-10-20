CREATE TABLE "public"."user_groups" ("group_id" bigserial NOT NULL, "sender_id" uuid, "receiver_id" uuid, "status" text, PRIMARY KEY ("group_id") );
