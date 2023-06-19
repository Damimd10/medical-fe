import { PropsWithChildren } from "react";

const LabelForm = ({ children }: PropsWithChildren) => {
  return <span className="text-base color-[#3D3D66]">{children}</span>;
};

export default LabelForm;
