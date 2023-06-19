import { PropsWithChildren } from "react";

const FormControl = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-y-2.5">{children}</div>;
};

export default FormControl;
