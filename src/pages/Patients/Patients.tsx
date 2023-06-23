import { Typography } from "@material-tailwind/react";
import { PatientsList } from "~/modules/patients/components";
import { usePatients } from "~/modules/patients/hooks";

const Patients = () => {
  const { data = [] } = usePatients();

  return (
    <div>
      <div className="mb-4">
        <Typography className="font-primary" variant="h5">
          Lista de Pacientes
        </Typography>
      </div>
      <PatientsList patients={data} />
    </div>
  );
};

export default Patients;
