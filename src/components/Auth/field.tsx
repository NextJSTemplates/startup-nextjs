import { SignupActionResponse } from "@/lib/shared/auth/signup";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type FieldProps = { state: SignupActionResponse, labelContent: ReactNode } & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue"
>;

export default function Field({ state, labelContent, ...props }: FieldProps) {
  const { name, className } = props;
  const prev_value = state?.inputs ? state.inputs[name] : "";
  const errors = state?.errors? state.errors[name]: []
  return (
    <div className={ cn ("mb-8", )}>
      <label
        htmlFor={name}
        className={ cn("mb-3 block text-sm text-dark dark:text-white",   )}
      >
        {labelContent}
      </label>
      <input
        {...props}
        name={name}
        defaultValue={prev_value}
        className={cn(
          "border-stroke  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none",
          className,
        )}
      />
      {errors && (
        <ul className=" py-2  text-red-800">
          { errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}