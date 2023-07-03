import { Navigate, useParams } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import { Template } from "~/api/templates";
import { useFields } from "~/hooks";
import {
  AppointmentForm,
  TemplatesList,
} from "~/modules/appointments/components";
import { useAppointment } from "~/modules/appointments/hooks";
import { usePatient } from "~/modules/patients/hooks";
import { useTemplates } from "~/modules/templates/hooks";
import { Appointment, Patient } from "~/types";

interface AppointmentsProps {
  appointment: Appointment;
  patient: Patient;
  templates: Template[];
}

const Appointments = ({
  appointment,
  patient,
  templates,
}: AppointmentsProps) => {
  const fields = useFields(appointment, templates);

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

const Container = () => {
  const { appointmentId = "", patientId = "" } = useParams();

  const { data: appointment } = useAppointment(appointmentId);
  const { data: templates = [] } = useTemplates();
  const { data: patient } = usePatient(patientId);

  if (!patientId) {
    return <Navigate to="/dashboard/patients" />;
  }

  /* if (!templates || !appointment || !patient) {
    return <div>Missing Information</div>;
  } */

  return (
    <Appointments
      appointment={appointment as Appointment}
      patient={patient as Patient}
      templates={templates}
    />
  );
};

export default Container;
