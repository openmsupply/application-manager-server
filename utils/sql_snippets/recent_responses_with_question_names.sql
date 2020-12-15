SELECT application_response.id, template_element_id, application_id, code, title, value, is_valid, timestamp
 FROM "public".application_response
JOIN template_element ON application_response.template_element_id = template_element.id
 ORDER BY application_response.id DESC