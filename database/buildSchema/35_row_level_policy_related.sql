-- Row level policy

ALTER TABLE public.application ENABLE ROW LEVEL SECURITY;

CREATE ROLE graphile_user WITH NOLOGIN;

ALTER ROLE graphile_user WITH LOGIN;
GRANT ALL PRIVILEGES ON DATABASE tmf_app_manager to graphile_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO graphile_user;
GRANT ALL PRIVILEGES ON SCHEMA public TO graphile_user;

