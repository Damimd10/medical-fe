import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import {
  AppointmentForm,
  TemplatesList,
} from "~/modules/appointments/components";
import { useAppointment } from "~/modules/appointments/hooks";
import { usePatient } from "~/modules/patients/hooks";
import { useTemplates } from "~/modules/templates/hooks";
import useAppointmentStore from "~/store/appointments";

const Appointments = () => {
  const { selectedTemplates } = useAppointmentStore();
  const { appointmentId = "", patientId = "" } = useParams();
  const { data: templates = [] } = useTemplates();
  const { data: patient } = usePatient(patientId);
  const { data: appointment } = useAppointment(appointmentId);

  const fields = useMemo(() => {
    if (appointment?.id) {
      return appointment.appointment_fields?.map((appointmentField) => ({
        ...appointmentField.field,
        value: appointmentField.value,
      }));
    }

    const fieldsFromTemplate = selectedTemplates
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

    return fieldsFromTemplate;
  }, [
    appointment?.appointment_fields,
    appointment?.id,
    selectedTemplates,
    templates,
  ]);

  if (!patientId) {
    return <Navigate to="/dashboard/patients" />;
  }

  return (
    <section>
      <div className="mb-4">
        <Typography className="font-primary" variant="h5">
          {patient?.surname} {patient?.name}
        </Typography>
      </div>
      <div className="flex gap-x-2">
        <div className="w-2/5">
          <TemplatesList templates={templates} />
        </div>
        <div className="border border-[#E0E7FE] bg-white bg-opacity-20 rounded-lg w-full">
          <AppointmentForm fields={fields as any} />
        </div>
      </div>
    </section>
  );
};

export default Appointments;
