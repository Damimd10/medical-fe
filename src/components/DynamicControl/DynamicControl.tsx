import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { XMarkIcon } from "@heroicons/react/24/solid";
import useAppointmentStore from "~/store/appointments";
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
  const { setRemovedFields } = useAppointmentStore();
  const { control, register, reset } = useFormContext();

  const handleRemoveField = () => {
    setRemovedFields(Number(id));
  };

  useEffect(() => {
    if (defaultValue) {
      reset((values) => ({
        ...values,
        [id]: defaultValue,
      }));
    }
  }, [id, defaultValue, reset]);

  const DynamicComponent = DYNAMIC_COMPONENTS[inputType];

  if (!DynamicComponent) return null;

  return (
    <div className="py-2 flex items-center gap-x-2">
      <DynamicComponent
        control={control}
        defaultValue={defaultValue}
        fieldName={id}
        fields={fields}
        label={label}
        register={register}
      />
      <XMarkIcon
        className="h-3 w-3 hover:cursor-pointer"
        onClick={handleRemoveField}
      />
    </div>
  );
}
