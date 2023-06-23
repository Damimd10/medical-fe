import { Controller, UseControllerProps } from "react-hook-form";

import { Input } from "@material-tailwind/react";
import { DynamicFieldData } from "~/types";

export default function TextControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, ref } }) => (
        <Input
          defaultValue={defaultValue}
          label={label}
          onChange={onChange}
          ref={ref}
          type="text"
        />
      )}
    />
  );
}
