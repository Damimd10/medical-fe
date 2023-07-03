import { useMemo } from "react";

import { uniqBy } from "lodash";
import { Template } from "~/api/templates";
import useAppointmentStore from "~/store/appointments";
import { Appointment } from "~/types";

const getFieldsFromTemplate = (
  selectedTemplates: number[],
  templates: Template[]
) => {
  return selectedTemplates
    .map((templateId) => {
      const template = templates.find(
        (currentTemplate) => currentTemplate.id === templateId
      );

      if (!template) {
        return null;
      }

      return template.fields_on_templates.map(
        (fieldOnTemplate) => fieldOnTemplate.field
      );
    })
    .flat();
};

const useFields = (appointment: Appointment, templates: Template[]) => {
  const { removedFields, selectedTemplates } = useAppointmentStore();

  const fields = useMemo(() => {
    const fieldsFromTemplate = getFieldsFromTemplate(
      selectedTemplates,
      templates
    );

    if (appointment && appointment.appointment_fields) {
      const prefilledFields = appointment.appointment_fields.map(
        (appointmentField) => ({
          ...appointmentField.field,
          value: appointmentField.value,
        })
      );

      const joinedFields = [...prefilledFields, ...fieldsFromTemplate];
      const uniqueFields = uniqBy(joinedFields, (field) => field?.id);
      const filteredFields = uniqueFields.filter(
        (field) => !removedFields.includes(field?.id as number)
      );

      return filteredFields;
    }

    const mappedFields = uniqBy(
      fieldsFromTemplate,
      (field) => field?.id
    ).filter((field) => !removedFields.includes(field?.id as number));

    return mappedFields;
  }, [appointment, removedFields, selectedTemplates, templates]);

  return fields;
};

export default useFields;
