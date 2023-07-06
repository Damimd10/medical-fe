import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

import { Field } from "~/types";

interface FieldsFormProps {
  fields: Field[];
}

const FieldsForm = ({ fields }: FieldsFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="fields"
      render={({ field }) => (
        <Select
          {...field}
          isMulti
          getOptionLabel={(option) => option.full_name}
          getOptionValue={(option) => option.id}
          options={fields}
        />
      )}
    />
  );
};

export default FieldsForm;
