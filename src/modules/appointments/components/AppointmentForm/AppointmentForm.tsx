import { FormProvider, useForm } from "react-hook-form";

import { DynamicControl } from "~/components";
import { Field } from "~/types";

interface FieldWithValue extends Field {
  value: string;
}

interface AppointmentFormProps {
  fields: FieldWithValue[];
}

const AppointmentForm = ({ fields }: AppointmentFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="p-4">
        {fields.map((field) => {
          if (!field) return null;

          return (
            <DynamicControl
              key={field.id}
              id={field.id}
              defaultValue={field.value || field.default_value || ""}
              fieldName={field.full_name || ""}
              inputType={field.input_type || ""}
              label={field.label || ""}
            />
          );
        })}
      </div>
    </FormProvider>
  );
};

export default AppointmentForm;
