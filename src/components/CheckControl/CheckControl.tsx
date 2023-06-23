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
      defaultValue={Boolean(defaultValue)}
      name={fieldName}
      render={({ field: { onChange, ref, value } }) => (
        <Checkbox
          defaultChecked={value}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              {label}
            </Typography>
          }
          onChange={onChange}
          ref={ref}
        />
      )}
    />
  );
};

export default CheckControl;
