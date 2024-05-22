import clsx from "clsx";
import { ReactNode } from "react";

const UiSectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={clsx(
        className,
        "text-3xl sm:text-4xl font-bold uppercase sm:leading-[48px] break-words md:break-normal"
      )}
    >
      {children}
    </h2>
  );
};

export default UiSectionTitle;
