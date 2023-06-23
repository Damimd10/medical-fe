import { Controller, UseControllerProps } from "react-hook-form";

import { Textarea } from "@material-tailwind/react";
import { DynamicFieldData } from "~/types";

export default function TextAreaControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & UseControllerProps) {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={fieldName}
      render={({ field: { onChange, ref } }) => (
        <Textarea
          label={label}
          onChange={onChange}
          placeholder="Comentarios"
          ref={ref}
          size="md"
        />
      )}
    />
  );
}
