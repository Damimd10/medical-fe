import { Checkbox, Typography } from "@material-tailwind/react";
import { Template } from "~/api/templates";
import useAppointmentStore from "~/store/appointments";

interface TemplateItemProps {
  template: Template;
}

const TemplateItem = ({ template }: TemplateItemProps) => {
  const {
    prefilledTemplates,
    selectedTemplates,
    updatePrefilledTemplates,
    updateSelectedTemplates,
  } = useAppointmentStore();

  const isPreffiled = prefilledTemplates.includes(template.id);
  const isSelected = selectedTemplates.includes(template.id);

  const handleClickTemplate = () => {
    if (isPreffiled) {
      return updatePrefilledTemplates(template.id);
    }

    updateSelectedTemplates(template.id);
  };

  const isChecked = isPreffiled || isSelected;

  return (
    <div
      className="flex items-center justify-between border border-[#E0E7FE] rounded-lg px-3 py-2"
      key={template.id}
    >
      <Typography className="color-[#70708C]">{template.name}</Typography>
      <Checkbox
        checked={isChecked}
        disabled={isPreffiled}
        onClick={handleClickTemplate}
      />
    </div>
  );
};

export default TemplateItem;
