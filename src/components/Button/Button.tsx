import { forwardRef } from "react";

interface ButtonFormProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonFormProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={`bg-[#605BFF] text-white rounded-lg p-3 ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
