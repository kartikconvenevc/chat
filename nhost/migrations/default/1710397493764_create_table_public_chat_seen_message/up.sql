CREATE TABLE "public"."chat_seen_message" ("id" bigserial NOT NULL, "message_id" bigint, "delivered" uuid, "seen" uuid, "deleted" uuid, PRIMARY KEY ("id") );
