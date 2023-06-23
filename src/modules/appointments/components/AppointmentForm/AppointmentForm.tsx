import { FormProvider, useForm } from "react-hook-form";

import { Template } from "~/api/templates";
import { DynamicControl } from "~/components";
import useAppointmentStore from "~/store/appointments";

interface AppointmentFormProps {
  templates: Template[];
}

const AppointmentForm = ({ templates }: AppointmentFormProps) => {
  const { selectedTemplates } = useAppointmentStore();

  const methods = useForm();

  const fields = selectedTemplates
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

  console.log("HERE FIELDS", fields);

  return (
    <FormProvider {...methods}>
      <div className="p-4">
        {fields.map((field) => {
          if (!field) return null;

          return (
            <DynamicControl
              key={field.id}
              id={field.id}
              defaultValue={field.default_value || ""}
              fieldName={field.full_name}
              inputType={field.input_type}
              label={field.label}
            />
          );
        })}
      </div>
    </FormProvider>
  );
};

export default AppointmentForm;
