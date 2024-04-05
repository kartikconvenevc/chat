CREATE TABLE "public"."user_Form_logs" ("id" bigserial NOT NULL, "userid" uuid, "formdata" jsonb, "formdata_senttime" timestamp, "orgn_id" bigint, PRIMARY KEY ("id") );
