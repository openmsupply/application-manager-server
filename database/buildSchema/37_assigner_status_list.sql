-- Similar to review_status_list (plase see comments), but for assigner
CREATE OR REPLACE VIEW review_assignment_with_assigned_questions_and_assigner AS
SELECT
    review_assignment.*,
    review_question_assignment.template_element_id AS assigned_template_element_ids,
    assigner_id
FROM
    review_assignment
    JOIN review_assignment_assigner_join ON review_assignment_assigner_join.review_assignment_id = review_assignment.id
    LEFT JOIN review_question_assignment ON review_question_assignment.review_assignment_id = review_assignment.id;

CREATE OR REPLACE VIEW assigner_status_list AS
SELECT
    "user".id AS assigner_id,
    application_with_question_count.id AS assigner_status_list_application_id,
    assl.stage_number,
    COUNT(DISTINCT (review_assignment_with_assigned_questions_and_assigner.id)) number_of_review_assignements,
    COUNT(DISTINCT (review_assignment_with_assigned_questions_and_assigner.id)) FILTER (WHERE review_assignment_with_assigned_questions_and_assigner.status = 'Assigned') number_of_assigned_review_assignments,
    COUNT(DISTINCT (review_assignment_with_assigned_questions_and_assigner.id)) FILTER (WHERE review_assignment_with_assigned_questions_and_assigner.status = 'Available') number_of_available_review_assignments,
    -- TODO OPTIMISE
    MAX(template_questions_count) AS number_of_questions,
    COUNT(review_assignment_with_assigned_questions_and_assigner.assigned_template_element_ids) AS number_of_assigned_questions,
    COUNT(DISTINCT (review_assignment_with_assigned_questions_and_assigner.assigned_template_element_ids)) >= MAX(template_questions_count) AS is_fully_assigned,
    MAX(template_questions_count) - COUNT(DISTINCT (review_assignment_with_assigned_questions_and_assigner.assigned_template_element_ids)) AS number_of_not_assigned_questions
FROM
    "user"
    -- TODO this should be a view
    CROSS JOIN (
        SELECT
            id,
            template_questions_count (application)
        FROM
            application) AS application_with_question_count
    -- TODO this should be a view
    LEFT JOIN (
        SELECT
            stage_number,
            application_id
        FROM
            application_stage_status_latest) AS assl ON application_with_question_count.id = assl.application_id
    LEFT JOIN review_assignment_with_assigned_questions_and_assigner ON review_assignment_with_assigned_questions_and_assigner.application_id = application_with_question_count.id
        AND review_assignment_with_assigned_questions_and_assigner.stage_number = assl.stage_number
        AND review_assignment_with_assigned_questions_and_assigner.assigner_id = "user".id
GROUP BY
    "user".id,
    "application_with_question_count".id,
    assl.stage_number
