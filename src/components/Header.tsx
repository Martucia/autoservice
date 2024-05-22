import { NavLink } from "react-router-dom";
import { useModalsContext } from "../context/modalsContext";
import { useSessionQuery, useSignOutMutation } from "../entities/auth/queries";
import SignInIcon from "../shared/icons/sign-in-icon";

const Header = () => {
  const { setLoginOpen } = useModalsContext();

  const { data, isLoading } = useSessionQuery(true);

  const signOutMutation = useSignOutMutation();

  const handleSignOut = () => {
    signOutMutation.mutate();
  };

  if (!isLoading)
    return (
      <div className="absolute left-8 md:left-20 right-8 md:right-20 lg:left-36 top-20">
        {data ? (
          <div className="flex items-center justify-between w-full">
            <div className="text-white flex items-center gap-6">
              <button
                className="text-white flex items-center gap-2"
                onClick={handleSignOut}
              >
                <SignInIcon /> <span>Вийти</span>
              </button>
              <span>{data.email}</span>
            </div>
            <div>
              {data.isAdmin && (
                <NavLink
                  className="py-3 px-8 rounded-md text-white bg-bl hover:bg-dkbl transition-all font-semibold"
                  to="/admin/appointments"
                >
                  Адмінка
                </NavLink>
              )}
            </div>
          </div>
        ) : (
          <button
            className="text-white flex items-center gap-2"
            onClick={() => setLoginOpen(true)}
          >
            <SignInIcon /> <span>Увійти</span>
          </button>
        )}
      </div>
    );
};

export default Header;
