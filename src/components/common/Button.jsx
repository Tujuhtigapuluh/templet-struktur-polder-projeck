import { forwardRef } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-blue-700",
  secondary: "bg-secondary text-white hover:bg-emerald-700",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-lg",
};

/** @param {{variant?: 'primary'|'secondary'|'outline', size?: 'sm'|'md'|'lg'} & import('react').ButtonHTMLAttributes<HTMLButtonElement>} props */
const Button = forwardRef(function Button(
  { className = "", variant = "primary", size = "md", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 ease-in-out hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
});

export default Button;