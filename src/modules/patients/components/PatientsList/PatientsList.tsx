import { Checkbox, Typography } from "@material-tailwind/react";
import { Patient } from "~/api/patients";

import PatientListItem from "../PatientListItem";

const TABLE_HEAD = ["ID", "Nombre", "Obra Social"];

interface PatientsListProps {
  patients: Patient[];
}

const PatientsList = ({ patients }: PatientsListProps) => {
  return (
    <div className="w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                <Checkbox />
              </Typography>
            </th>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <PatientListItem key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
