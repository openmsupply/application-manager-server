-- review assignment

CREATE TYPE public.review_assignment_status as ENUM ('Available', 'Self-assigned by another', 'Assigned', 'Available for self-assignment'); 

CREATE TABLE public.review_assignment (
	id serial primary key,
	assigner_id integer references public.user(id),
	reviewer_id integer references public.user(id),
	organisation_id integer references public.organisation(id),
	stage_id integer references public.template_stage(id),
	stage_number integer,
	status public.review_assignment_status NOT NULL,
	application_id integer references public.application(id),
	template_section_restrictions varchar [],
	trigger public.trigger,
	time_created timestamptz default current_timestamp,
	level integer,
	is_last_level boolean
);

-- TRIGGER (Listener) on review_assignment table
CREATE TRIGGER review_assignment_trigger AFTER INSERT OR UPDATE OF trigger ON public.review_assignment
FOR EACH ROW
WHEN (NEW.trigger IS NOT NULL AND NEW.trigger <> 'Processing' AND NEW.trigger <> 'Error')
EXECUTE FUNCTION public.add_event_to_trigger_queue();



CREATE UNIQUE INDEX unique_review_assignment_with_org
ON review_assignment(reviewer_id, organisation_id, stage_number, application_id, level)
WHERE organisation_id IS NOT NULL;

CREATE UNIQUE INDEX unique_review_assignment_no_org
ON review_assignment(reviewer_id, stage_number, application_id, level)
WHERE organisation_id IS NULL;



