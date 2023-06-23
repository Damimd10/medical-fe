import { useFormContext } from "react-hook-form";

import { DynamicFieldData } from "~/types";

import CheckControl from "../CheckControl";
import NumericControl from "../NumericControl";
import TextAreaControl from "../TextAreaControl";
import TextControl from "../TextControl";

const DYNAMIC_COMPONENTS: any = {
  checkbox: CheckControl,
  numeric: NumericControl,
  select: () => null,
  text: TextControl,
  textarea: TextAreaControl,
};

export default function DynamicControl({
  id,
  config = {},
  defaultValue,
  fieldName,
  fields = [],
  inputType,
  label,
  options = [],
}: DynamicFieldData) {
  const { control, register } = useFormContext();

  const DynamicComponent = DYNAMIC_COMPONENTS[inputType];

  if (!DynamicComponent) return null;

  return (
    <div className="py-2">
      <DynamicComponent
        control={control}
        defaultValue={defaultValue}
        fieldName={fieldName}
        fields={fields}
        label={label}
        register={register}
      />
    </div>
  );
}
