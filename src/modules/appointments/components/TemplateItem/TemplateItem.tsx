import { Checkbox, Typography } from "@material-tailwind/react";
import { Template } from "~/api/templates";

interface TemplateItemProps {
  template: Template;
}

const TemplateItem = ({ template }: TemplateItemProps) => {
  return (
    <div
      className="flex items-center justify-between border border-[#E0E7FE] rounded-lg px-3 py-4"
      key={template.id}
    >
      <Typography className="color-[#70708C]">{template.name}</Typography>
      <Checkbox />
    </div>
  );
};

export default TemplateItem;
