import { Typography } from "@material-tailwind/react";
import { TemplatesList } from "~/modules/appointments/components";
import { useTemplates } from "~/modules/templates/hooks";

const Appointments = () => {
  const { data = [] } = useTemplates();

  return (
    <section className="border border-[#E0E7FE] rounded-3xl bg-slate-400 bg-opacity-40 w-full m-4 p-8">
      <div className="mb-4">
        <Typography className="font-primary" variant="h5">
          Cita
        </Typography>
      </div>
      <div className="flex gap-x-2">
        <div className="w-2/5">
          <TemplatesList templates={data} />
        </div>
        <div className="border border-[#E0E7FE] bg-white bg-opacity-20 rounded-lg w-full">
          templates
        </div>
      </div>
    </section>
  );
};

export default Appointments;
