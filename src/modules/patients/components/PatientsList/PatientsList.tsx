import { Checkbox, Typography } from "@material-tailwind/react";
import { Patient } from "~/api/patients";

import PatientItem from "../PatientItem";

interface PatientsListProps {
  patients: Patient[];
}

const PatientsList = ({ patients }: PatientsListProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center px-3 py-2">
        <div className="w-1/12">
          <Checkbox />
        </div>
        <div className="w-1/12">
          <Typography>ID</Typography>
        </div>
        <div className="w-5/12">
          <Typography>Paciente</Typography>
        </div>
        <div className="w-5/12">
          <Typography>Obra Social</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {patients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientsList;
