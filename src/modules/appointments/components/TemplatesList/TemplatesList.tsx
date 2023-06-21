import { Typography } from "@material-tailwind/react";
import { Template } from "~/api/templates";

import TemplateItem from "../TemplateItem";

interface TemplatesListProps {
  templates: Template[];
}

const TemplatesList = ({ templates }: TemplatesListProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {templates.map((template) => (
        <TemplateItem key={template.id} template={template} />
      ))}
      <div className="border border-[#605BFF] border-dashed rounded-lg bg-[#605bff] bg-opacity-5 px-3 py-4">
        <Typography className="text-[#605BFF] font-semibold">
          Agregar Template
        </Typography>
      </div>
    </div>
  );
};

export default TemplatesList;
