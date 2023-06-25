import { Typography } from "@material-tailwind/react";
import { Patient } from "~/types";

import HistoryItem from "../HistoryItem";

interface HistoryTabProps {
  history: Patient["appointments"];
}

const HistoryTab = ({ history = [] }: HistoryTabProps) => {
  return (
    <div>
      <div className="flex items-center px-4">
        <div className="w-3/12">
          <Typography>Fecha</Typography>
        </div>
        <div className="w-3/12">
          <Typography>Doctor</Typography>
        </div>
        <div className="w-3/12">
          <Typography>Especialidad</Typography>
        </div>
        <div className="w-3/12">
          <Typography>Formulario</Typography>
        </div>
      </div>
      {history.map((appointment) => (
        <HistoryItem key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default HistoryTab;
