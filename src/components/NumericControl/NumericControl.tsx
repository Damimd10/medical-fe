import { Controller, UseControllerProps } from "react-hook-form";

import { Input } from "@material-tailwind/react";
import { DynamicFieldData } from "~/types";

export default function NumericControl({
  control,
  defaultValue,
  fieldName,
  label,
}: DynamicFieldData & Pick<UseControllerProps, "control">) {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => (
        <Input
          {...field}
          defaultValue={defaultValue}
          label={label}
          type="number"
        />
      )}
    />
  );
}
