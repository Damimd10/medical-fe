import { useParams } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import { PatientProfile } from "~/modules/patients/components";
import { usePatient } from "~/modules/patients/hooks";

const PatientDetails = () => {
  const params = useParams();
  const patientId = params.patientId || "";

  const { data } = usePatient(patientId);

  if (!data) {
    return null;
  }

  return (
    <div>
      <Typography variant="h5">Perfil</Typography>
      <PatientProfile profile={data} />
    </div>
  );
};

export default PatientDetails;
