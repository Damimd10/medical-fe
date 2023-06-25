import { useNavigate, useParams } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import { Appointment } from "~/types";

console.log(es);

dayjs.locale("es");

interface HistoryItemProps {
  appointment: Appointment;
}

const HistoryItem = ({ appointment }: HistoryItemProps) => {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const handleClickForm = () => {
    navigate(`/dashboard/patients/${patientId}/appointments/${appointment.id}`);
  };

  return (
    <div className="flex items-center border border-[#E0E7FE] bg-white bg-opacity-10 rounded-lg my-1.5 py-2 px-4">
      <div className="w-3/12">
        <Typography>
          {dayjs(appointment.date).format("MMMM D, YYYY")}
        </Typography>
      </div>
      <div className="w-3/12">
        <Typography>
          {appointment.doctor?.surname} {appointment.doctor?.name}
        </Typography>
      </div>
      <div className="w-3/12">
        <Typography>{appointment.speciality?.name}</Typography>
      </div>
      <div className="w-3/12">
        <Typography
          className="text-[#00BFAF] font-medium cursor-pointer"
          onClick={handleClickForm}
        >
          Ver Formulario
        </Typography>
      </div>
    </div>
  );
};

export default HistoryItem;
