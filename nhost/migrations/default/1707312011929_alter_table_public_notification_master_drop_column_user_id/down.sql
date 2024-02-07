alter table "public"."notification_master" alter column "user_id" drop not null;
alter table "public"."notification_master" add column "user_id" int8;
