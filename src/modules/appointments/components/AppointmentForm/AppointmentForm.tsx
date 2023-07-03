import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { DevTool } from "@hookform/devtools";
import { Button } from "@material-tailwind/react";
import { useQueryClient } from "@tanstack/react-query";
import { createAppointment } from "~/api/appointments";
import { DynamicControl } from "~/components";
import {
  useUpdateAppointmentFields,
  useUpdateAppointmentTemplates,
} from "~/modules/appointments/hooks";
import useAppointmentStore, { useTemporalStore } from "~/store/appointments";
import { Field } from "~/types";

import useRemoveFields from "../../hooks/useRemoveFields";

interface FieldWithValue extends Field {
  value: string;
}

interface AppointmentFormProps {
  fields: FieldWithValue[];
}

const AppointmentForm = ({ fields }: AppointmentFormProps) => {
  const { appointmentId = "" } = useParams();

  const queryClient = useQueryClient();
  const { mutate: updateFields } = useUpdateAppointmentFields();
  const { mutate: updateTemplates } = useUpdateAppointmentTemplates();
  const { mutate: removeFields } = useRemoveFields();
  const { removedFields, selectedTemplates } = useAppointmentStore();
  const state = useTemporalStore((state) => state);
  const methods = useForm();

  const onSubmit = async (data: any) => {
    const fields = Object.keys(data).map((key) => ({
      fieldId: Number(key),
      value: String(data[key]),
    }));

    const templates = selectedTemplates.map((templateId) => ({
      templateId,
    }));

    if (!appointmentId) {
      return createAppointment({
        date: Date.now(),
        doctorId: 1,
        fields,
        patientId: 1,
        specialityId: 1,
      });
    }

    if (removedFields.length > 0) {
      removeFields({ id: String(appointmentId), fields: removedFields });
    }

    updateFields(
      { id: appointmentId, appointment: fields },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["appointment"],
          });
        },
      }
    );

    updateTemplates({ id: appointmentId, appointment: templates });
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
        <div className="flex justify-end gap-x-2 py-4">
          <Button onClick={() => state.undo()}>Deshacer</Button>
          <Button onClick={methods.handleSubmit(onSubmit)}>Guardar</Button>
        </div>
      </div>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default AppointmentForm;
