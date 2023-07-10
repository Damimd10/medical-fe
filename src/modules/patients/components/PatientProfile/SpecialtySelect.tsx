import { useEffect, useRef } from "react";
import Select from "react-select";

import useSpecialities from "../../hooks/useSpecialities";

const SpecialtySelect = ({
  onChange,
}: {
  onChange: (speciality: number | null) => void;
}) => {
  const { data = [] } = useSpecialities();
  const selectOptions = data.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const defaultValue = selectOptions[0];
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Invoke onChange with the default value only on the initial render
    if (isFirstRender.current && defaultValue) {
      onChange(defaultValue.value);
      isFirstRender.current = false;
    }
  }, [defaultValue, onChange]);

  return defaultValue ? (
    <Select
      styles={{
        // Fixes the overlapping problem of the component
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
      }}
      defaultValue={defaultValue}
      options={selectOptions}
      onChange={(option) => (option ? onChange(option.value) : null)}
    />
  ) : null;
};

export default SpecialtySelect;
