import { Navigate, useLocation } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import {
  AppointmentForm,
  TemplatesList,
} from "~/modules/appointments/components";
import { useTemplates } from "~/modules/templates/hooks";

const Appointments = () => {
  const { state } = useLocation();
  const { data = [] } = useTemplates();

  if (!state || !state.patient) {
    return <Navigate to="/dashboard/patients" />;
  }

  return (
    <div>
      <div className="mb-4">
        <Typography className="font-primary" variant="h5">
          {state.patient.surname} {state.patient.name}
        </Typography>
      </div>
      <div className="flex gap-x-2">
        <div className="w-2/5">
          <TemplatesList templates={data} />
        </div>
        <div className="border border-[#E0E7FE] bg-white bg-opacity-20 rounded-lg w-full">
          <AppointmentForm templates={data} />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
