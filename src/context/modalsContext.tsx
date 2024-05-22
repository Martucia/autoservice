import { createContext, useContext, useState, ReactNode } from "react";

interface ModalsContextType {
  isRegistrationModalOpen: boolean;
  setRegistrationOpen: (isOpen: boolean) => void;
  isLoginModalOpen: boolean;
  setLoginOpen: (isOpen: boolean) => void;
}

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isRegistrationModalOpen, setRegistrationOpen] =
    useState<boolean>(false);
  const [isLoginModalOpen, setLoginOpen] = useState<boolean>(false);

  return (
    <ModalsContext.Provider
      value={{
        isRegistrationModalOpen,
        setRegistrationOpen,
        isLoginModalOpen,
        setLoginOpen,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModalsContext = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModals must be used within a useModalsProvider");
  }
  return context;
};
