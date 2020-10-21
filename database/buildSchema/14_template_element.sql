-- template element (questions or information elements)

CREATE TYPE public.template_element_category AS ENUM ('Question', 'Information');

CREATE TABLE public.template_element (
    id serial primary key,
    section_id integer references public.template_section(id),
    code varchar NOT NULL,
    index integer,
    title varchar,
    category public.template_element_category,
    visibility_condition jsonb,
    element_type_plugin_code varchar,
    is_required boolean,
    is_editable jsonb,
    parameters jsonb,
    validation jsonb
);
