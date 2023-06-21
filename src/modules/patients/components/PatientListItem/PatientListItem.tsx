import { Checkbox, Typography } from "@material-tailwind/react";
import { Patient } from "~/api/patients";

interface PatientListItemProps {
  patient: Patient;
}

const PatientListItem = ({ patient }: PatientListItemProps) => {
  return (
    <tr key={patient.id} className="even:bg-blue-gray-50/50">
      <td className="p-4">
        <Checkbox />
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {patient.id}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {patient.surname} {patient.name}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {patient.social_insurance.name}
        </Typography>
      </td>
    </tr>
  );
};

export default PatientListItem;
