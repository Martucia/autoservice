import clsx from "clsx";
import { Field } from "formik";

interface UiTextAreaProps {
  id: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  rows?: number;
}

const UiTextArea = ({
  id,
  placeholder,
  label,
  disabled = false,
  rows = 2,
}: UiTextAreaProps) => {
  return (
    <div>
      {label && (
        <label className="text-xs opacity-60 block mb-2">{label}</label>
      )}

      <Field className="w-full" name={id}>
        {({ field, meta }: any) => (
          <div>
            <textarea
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
              disabled={disabled}
              autoComplete="off"
              rows={rows}
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

export default UiTextArea;
