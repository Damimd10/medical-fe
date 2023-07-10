import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, Typography } from "@material-tailwind/react";
import { Patient } from "~/types";

import PatientTabs from "../PatientTabs";
import SpecialtySelect from "./SpecialtySelect";

interface PatientProfileProps {
  profile: Patient;
}

const PatientProfile = ({ profile }: PatientProfileProps) => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState(0);

  const handleClickAppointment = () => {
    console.log(selectedSpecialty);
    navigate(`/dashboard/patients/${profile.id}/appointments`);
  };

  const handleSpecialityChange = (speciality_id: number | null) => {
    if (speciality_id) {
      setSelectedSpecialty(speciality_id);
    }
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
        <div className="flex flex-row ml-auto">
          <SpecialtySelect onChange={handleSpecialityChange} />
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
