-- user table

CREATE TABLE public.user (
    id serial primary key,
    first_name varchar,
    last_name varchar,
    username varchar UNIQUE,
    date_of_birth date,
    password_hash varchar,
    email varchar
);