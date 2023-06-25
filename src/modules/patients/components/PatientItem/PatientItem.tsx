import { useNavigate } from "react-router-dom";

import { Checkbox, Typography } from "@material-tailwind/react";
import { Patient } from "~/types";

interface PatientListItemProps {
  patient: Patient;
}

const PatientItem = ({ patient }: PatientListItemProps) => {
  const navigate = useNavigate();

  const handleClickPatient = () => {
    navigate(`/dashboard/patients/${patient.id}`);
  };

  return (
    <div
      className="w-full flex items-center border border-[#E0E7FE] rounded-lg bg-white bg-opacity-30 py-2 px-3 cursor-pointer"
      onClick={handleClickPatient}
    >
      <div className="w-1/12">
        <Checkbox />
      </div>
      <div className="w-1/12">
        <Typography>{patient.id}</Typography>
      </div>
      <div className="w-5/12">
        <Typography>
          {patient.surname} {patient.name}
        </Typography>
      </div>
      <div className="w-5/12">
        <Typography>{patient.social_insurance?.name}</Typography>
      </div>
    </div>
  );
};

export default PatientItem;
