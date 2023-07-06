import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Select from "react-select";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import useAllFields from "~/hooks/useAllFields";
import { Field } from "~/types";

interface FieldsModalProps {
  handler: () => void;
  isOpen: boolean;
}

const FieldsModal = ({ handler, isOpen }: FieldsModalProps) => {
  const [selectedFields, setSelectedFields] = useState<Field[]>([]);
  const { getValues, setValue } = useFormContext();
  const { data = [] } = useAllFields();

  const handleChange = (selectedOptions: any) => {
    setSelectedFields(selectedOptions);
  };

  const handleConfirm = () => {
    setValue("fields", selectedFields);
    handler();
  };

  const customFields: Field[] = getValues("fields") || [];
  const fields = data.filter((field) => {
    const isCustom = customFields.find(
      (customField) => customField.id === field.id
    );

    return !isCustom;
  });

  return (
    <Dialog
      className="bg-[#F9FAFE] border border-[#E0E7FE] rounded-3xl p-4"
      open={isOpen}
      handler={handler}
      size="sm"
    >
      <DialogHeader>Agregar Nuevos Campos</DialogHeader>
      <DialogBody>
        {data && (
          <Select
            isMulti
            getOptionLabel={(option) => option.full_name || ""}
            getOptionValue={(option) => option.id.toString()}
            onChange={handleChange}
            options={fields}
          />
        )}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handler} className="mr-1">
          <span>Cancelar</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleConfirm}>
          <span>Confirmar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default FieldsModal;
