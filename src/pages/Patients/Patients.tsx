import { Typography } from "@material-tailwind/react";
import { PatientsList } from "~/modules/patients/components";
import { usePatients } from "~/modules/patients/hooks";

const Patients = () => {
  const { data = [] } = usePatients();

  return (
    <section className="border border-[#E0E7FE] rounded-3xl bg-slate-400 bg-opacity-40 w-full m-4 p-8">
      <div className="mb-4">
        <Typography variant="h5">Lista de Pacientes</Typography>
      </div>
      <PatientsList patients={data} />
    </section>
  );
};

export default Patients;
