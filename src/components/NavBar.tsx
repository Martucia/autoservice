import { NavLink } from "react-router-dom";
import { AdminNavBarRoutes } from "../shared/constants/routes";
import clsx from "clsx";

const NavBar = () => {
  return (
    <nav className="bg-white h-full pt-10 px-4">
      {AdminNavBarRoutes.map((route) => (
        <NavLink
          key={route.link}
          to={route.link}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-4 py-4 px-6 font-bold text-lg rounded-md",
              isActive && "bg-bl text-white"
            )
          }
        >
          <route.icon /> <span>{route.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
