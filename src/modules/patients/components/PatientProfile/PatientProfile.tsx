import { useNavigate } from "react-router-dom";

import { Avatar, Button, Typography } from "@material-tailwind/react";
import { Patient } from "~/types";

import PatientTabs from "../PatientTabs";

interface PatientProfileProps {
  profile: Patient;
}

const PatientProfile = ({ profile }: PatientProfileProps) => {
  const navigate = useNavigate();

  const handleClickAppointment = () => {
    navigate(`/dashboard/patients/${profile.id}/appointments`);
  };

  return (
    <div className="bg-white border border-[#F0F3FF] rounded-3xl my-4 p-7">
      <div className="flex items-center">
        <Avatar
          src="https://www.material-tailwind.com/img/face-2.jpg"
          size="xxl"
        />
        <div className="flex flex-col justify-center px-6">
          <Typography variant="h6">
            {profile.surname} {profile.name}
          </Typography>
          <Typography variant="small">Residencia</Typography>
        </div>
        <div className="ml-auto">
          <Button
            className="rounded-full"
            color="light-blue"
            onClick={handleClickAppointment}
            variant="outlined"
          >
            Crear Cita
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <PatientTabs history={profile.appointments} />
      </div>
    </div>
  );
};

export default PatientProfile;
