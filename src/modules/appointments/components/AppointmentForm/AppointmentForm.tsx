import { useState } from "react";
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
import FieldsModal from "../FieldsModal";

interface FieldWithValue extends Field {
  value: string;
}

interface AppointmentFormProps {
  fields: FieldWithValue[];
}

const AppointmentForm = ({ fields }: AppointmentFormProps) => {
  const { appointmentId = "" } = useParams();
  const queryClient = useQueryClient();
  const methods = useForm();

  const { mutate: updateFields } = useUpdateAppointmentFields();
  const { mutate: updateTemplates } = useUpdateAppointmentTemplates();
  const { mutate: removeFields } = useRemoveFields();

  const { removedFields, selectedTemplates } = useAppointmentStore();
  const state = useTemporalStore((state) => state);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data: any) => {
    const { fields, ...form } = data;

    const formFields = Object.keys(form).map((key) => ({
      fieldId: Number(key),
      value: String(data[key]),
    }));

    const templates = selectedTemplates.map((templateId) => ({
      templateId,
    }));

    if (!appointmentId) {
      console.log("Creating appointment");
      return createAppointment({
        date: Date.now(),
        doctorId: 1,
        fields: formFields,
        patientId: 1,
        specialityId: 1,
        organizationId: 1,
      });
    }

    if (removedFields.length > 0) {
      removeFields({ id: String(appointmentId), fields: removedFields });
    }

    updateFields(
      { id: appointmentId, appointment: formFields },
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

  const watchedFields = methods.watch("fields") || [];
  const resultFields = [...fields, ...watchedFields];

  return (
    <FormProvider {...methods}>
      <div className="p-4">
        {resultFields.map((field) => {
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
        <div>
          <FieldsModal handler={handleOpen} isOpen={open} />
          <Button
            className="text-[#605BFF]"
            onClick={handleOpen}
            variant="text"
          >
            Agregar Campos
          </Button>
        </div>
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
