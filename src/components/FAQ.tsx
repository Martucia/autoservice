import { useState } from "react";
import ArrowIcon from "../shared/icons/arrow-icon";
import clsx from "clsx";

type FAQProps = {
  title: string;
  text: string;
};

const FAQ = ({ title, text }: FAQProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="cursor-pointer border-l-2 border-l-bl flex items-center justify-between w-full shadow-lg bg-white rounded-sm py-8 px-5 2md:px-10"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="uppercase font-bold 2md:text-xl">{title}</span>
        <span className={clsx(isOpen && "rotate-180", "text-bl text-4xl")}>
          <ArrowIcon />
        </span>
      </div>
      <div
        className={clsx("bg-lightGray", {
          "py-8": isOpen,
          "px-10": isOpen,
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
          "h-0 overflow-hidden": !isOpen,
        })}
        style={{
          transition: "opacity 0.3s ease",
          maxHeight: isOpen ? "unset" : "0",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default FAQ;
