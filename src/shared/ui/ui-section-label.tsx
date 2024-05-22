import { ReactNode } from "react";
import PulseIcon from "../icons/pulse-icon";
import clsx from "clsx";

const UiSectionLabel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(className, "text-bl flex items-center gap-2")}>
      <span>
        <PulseIcon />
      </span>
      <span className="uppercase font-bold">{children}</span>
    </div>
  );
};

export default UiSectionLabel;
