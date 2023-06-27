import { FormProvider, useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import { Button } from "@material-tailwind/react";
import { useQueryClient } from "@tanstack/react-query";
import { DynamicControl } from "~/components";
import { Field } from "~/types";

import { useUpdateAppointment } from "../../hooks";

interface FieldWithValue extends Field {
  value: string;
}

interface AppointmentFormProps {
  appointmentId: number | undefined;
  fields: FieldWithValue[];
}

const AppointmentForm = ({ appointmentId, fields }: AppointmentFormProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useUpdateAppointment();
  const methods = useForm();

  const onSubmit = (data: any) => {
    const fields = Object.keys(data).map((key) => ({
      fieldId: Number(key),
      value: String(data[key]),
    }));

    mutate(
      { id: appointmentId, appointment: fields },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["appointment"],
          });
        },
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <div className="p-4">
        {fields.map((field) => {
          if (!field) return null;

          return (
            <DynamicControl
              key={field.id}
              id={String(field.id) || ""}
              defaultValue={field.value || field.default_value || ""}
              fieldName={field.full_name || ""}
              inputType={field.input_type || ""}
              label={field.label || ""}
            />
          );
        })}
        <div className="flex justify-end py-4">
          <Button onClick={methods.handleSubmit(onSubmit)}>Guardar</Button>
        </div>
      </div>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default AppointmentForm;
