import clsx from "clsx";
import { Field, FieldAttributes } from "formik";
import { useState } from "react";
import EyeIcon from "../icons/eye-icon";
import ClosedEyeIcon from "../icons/closed-eye-icon";

interface UiPasswordFieldProps {
  id: string;
  placeholder?: string;
  type?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
}

const UiPasswordField = ({
  id,
  placeholder,
  label,
  disabled = false,
}: UiPasswordFieldProps) => {
  const [isPasswordShow, setPasswordShow] = useState<boolean>(false);
  return (
    <div>
      {label && (
        <label className="text-xs opacity-60 block mb-2">{label}</label>
      )}

      <Field className="w-full" name={id}>
        {({ field, meta }: any) => (
          <div>
            <div className="relative">
              <input
                className={clsx(
                  disabled && "opacity-50",
                  meta.touched &&
                    meta.error &&
                    "border-red-500 hover:border-red-500 focus:border-red-500",
                  "w-full py-4 px-5 border transition-all outline-none border-gray hover:border-darkGray focus:border-darkGray placeholder:text-sm placeholder:uppercase placeholder:font-bold"
                )}
                id={id}
                name={id}
                placeholder={placeholder}
                type={isPasswordShow ? "text" : "password"}
                disabled={disabled}
                autoComplete="off"
                {...field}
              />

              <button
                onClick={() => setPasswordShow(!isPasswordShow)}
                className="absolute right-5 top-[50%] translate-y-[-50%] text-xl"
                type="button"
              >
                {isPasswordShow ? <EyeIcon /> : <ClosedEyeIcon />}
              </button>
            </div>

            {meta.touched && meta.error && (
              <span className="text-sm mt-1 text-red-500">{meta.error}</span>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default UiPasswordField;
