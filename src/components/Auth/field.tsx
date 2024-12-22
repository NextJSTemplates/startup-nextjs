import { ActionResponse } from "@/lib/shared/auth";
import { SignupActionResponse } from "@/lib/shared/auth/signup";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type FieldProps<Fields> = { state:  ActionResponse<Fields>, labelContent: ReactNode } & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "defaultValue"
>;

export default function Field<Fields>({ state, labelContent, ...props }: FieldProps<Fields>) {
  const { name, className } = props;
  const prev_value = state?.inputs ? state.inputs[name] : "";
  const errors = state?.errors? state.errors[name]: null
  return (
    <div className={ cn ("mb-8", )}>
      <label
        htmlFor={name}
        className={ cn("mb-3 block text-sm text-dark dark:text-white", state.success?  "!text-green-800" : ( errors? " !text-red-800": "")  )}
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
        <ul className="  text-red-900">
          { errors.map((e, i) => (
            <li className=" p-0.5" key={i}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}