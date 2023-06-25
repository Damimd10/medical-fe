import { Checkbox, Typography } from "@material-tailwind/react";
import { Template } from "~/api/templates";
import useAppointmentStore from "~/store/appointments";

interface TemplateItemProps {
  template: Template;
}

const TemplateItem = ({ template }: TemplateItemProps) => {
  const { selectedTemplates, updateSelectedTemplates } = useAppointmentStore();

  const handleClickTemplate = () => updateSelectedTemplates(template.id);

  const isChecked = selectedTemplates.includes(template.id);

  return (
    <div
      className="flex items-center justify-between border border-[#E0E7FE] rounded-lg px-3 py-4"
      key={template.id}
    >
      <Typography className="color-[#70708C]">{template.name}</Typography>
      <Checkbox defaultChecked={isChecked} onClick={handleClickTemplate} />
    </div>
  );
};

export default TemplateItem;
