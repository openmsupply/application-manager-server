-- review assignment
CREATE TYPE public.review_assignment_status AS ENUM (
    'Available',
    'Self-assigned by another',
    'Assigned',
    'Available for self-assignment'
);

CREATE TABLE public.review_assignment (
    id serial PRIMARY KEY,
    reviewer_id integer REFERENCES public.user (id),
    organisation_id integer REFERENCES public.organisation (id),
    stage_id integer REFERENCES public.template_stage (id),
    stage_number integer,
    status public.review_assignment_status NOT NULL,
    application_id integer REFERENCES public.application (id),
    template_section_restrictions varchar[],
    TRIGGER public.trigger,
    time_created timestamptz DEFAULT CURRENT_TIMESTAMP,
    level integer,
    is_last_level boolean
);

CREATE TABLE public.review_assignment_assigner_join (
    id serial PRIMARY KEY,
    assigner_id integer REFERENCES public.user (id),
    review_assignment_id integer REFERENCES public.review_assignment (id),
    organisation_id integer REFERENCES public.organisation (id)
);

-- TRIGGER (Listener) on review_assignment table
CREATE TRIGGER review_assignment_trigger
    AFTER INSERT OR UPDATE OF trigger ON public.review_assignment
    FOR EACH ROW
    WHEN (NEW.trigger IS NOT NULL AND NEW.trigger <> 'Processing' AND NEW.trigger <> 'Error')
    EXECUTE FUNCTION public.add_event_to_trigger_queue ();

CREATE UNIQUE INDEX unique_review_assignment_with_org ON review_assignment (reviewer_id, organisation_id, stage_number, application_id, level)
WHERE
    organisation_id IS NOT NULL;

CREATE UNIQUE INDEX unique_review_assignment_no_org ON review_assignment (reviewer_id, stage_number, application_id, level)
WHERE
    organisation_id IS NULL;

CREATE UNIQUE INDEX unique_review_assignment_assigner_join__with_org ON review_assignment_assigner_join (assigner_id, organisation_id, review_assignment_id)
WHERE
    organisation_id IS NOT NULL;

CREATE UNIQUE INDEX unique_review_assignment_assigner_join__no_org ON review_assignment_assigner_join (assigner_id, review_assignment_id)
WHERE
    organisation_id IS NULL;

