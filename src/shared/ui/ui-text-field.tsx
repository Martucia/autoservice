import clsx from "clsx";
import { Field, FieldAttributes } from "formik";
import InputMask from "react-input-mask";

interface UiTextFieldProps {
  id: string;
  placeholder?: string;
  type?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
  autoComplete?: boolean;
}

const UiTextField = ({
  id,
  placeholder,
  type = "text",
  label,
  disabled = false,
  autoComplete = false,
}: UiTextFieldProps) => {
  const phoneMask = "+380(99)999-99-99";

  return (
    <div className={type === "hidden" ? "hidden" : undefined}>
      {label && (
        <label className="text-xs opacity-60 block mb-2">{label}</label>
      )}

      <Field className="w-full" name={id}>
        {({ field, meta }: any) => (
          <div>
            <InputMask
              mask={type === "phone" ? phoneMask : null}
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
              type={type}
              disabled={disabled}
              autoComplete={autoComplete ? "on" : "off"}
              {...field}
            />
            {meta.touched && meta.error && (
              <span className="text-sm mt-1 text-red-500">{meta.error}</span>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default UiTextField;
