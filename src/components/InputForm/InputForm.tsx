import { forwardRef } from "react";

export interface InputFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ className, ...props }, ref) => (
    <input
      className={`h-12 border border-[#E0E7FE] px-5 py-4 w-full rounded-lg ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default InputForm;
