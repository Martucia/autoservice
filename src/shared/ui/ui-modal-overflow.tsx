import { ReactNode, useEffect } from "react";
import CloseIcon from "../icons/close-icon";

type UiModalOverflowProps = {
  children: ReactNode;
  title: string;
  onClose: () => void;
};

const UiModalOverflow = ({
  children,
  onClose,
  title,
}: UiModalOverflowProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
      <div className="bg-white max-w-md w-full rounded-sm p-10">
        <div className="flex items-center mb-8 justify-between">
          <h3 className="text-3xl font-bold uppercase">{title}</h3>
          <button className="text-2xl" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UiModalOverflow;
