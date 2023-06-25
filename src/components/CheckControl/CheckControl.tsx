import { Controller, UseControllerProps } from "react-hook-form";

import { Checkbox, Typography } from "@material-tailwind/react";
import { DynamicFieldData } from "~/types";

type CheckControlProps = DynamicFieldData & Pick<UseControllerProps, "control">;

const CheckControl = ({
  control,
  defaultValue,
  fieldName,
  label,
}: CheckControlProps) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => (
        <Checkbox
          defaultChecked={Boolean(defaultValue)}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              {label}
            </Typography>
          }
          {...field}
        />
      )}
    />
  );
};

export default CheckControl;
