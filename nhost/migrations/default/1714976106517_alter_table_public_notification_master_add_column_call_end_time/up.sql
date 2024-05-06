alter table "public"."notification_master" add column "call_end_time" timestamp
 null default now();
