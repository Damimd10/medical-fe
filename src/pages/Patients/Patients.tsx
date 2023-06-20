import { usePatients } from "~/modules/patients/hooks";

const Patients = () => {
  usePatients();

  return <div>Patients</div>;
};

export default Patients;
