import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "lined";
type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const UiButton = ({ className, variant, ...props }: UiButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        className,
        "cursor-pointer flex gap-2 items-center justify-center hover:bg-opacity-90 transition-all px-2 ph:px-10 text-sm ph:text-base",
        {
          primary:
            "py-5 ph:py-4 text-white bg-bl uppercase font-bold rounded-sm",
          lined:
            "border border-bl py-3 text-bl font-bold uppercase rounded-sm hover:bg-slate-300 hover:bg-opacity-15 transition-all",
        }[variant]
      )}
    />
  );
};

export default UiButton;
