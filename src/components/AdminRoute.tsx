import { Navigate, Outlet } from "react-router-dom";
import { useSessionQuery } from "../entities/auth";
import NavBar from "./NavBar";

const AdminRoute = () => {
  const { data, isLoading } = useSessionQuery(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && data.isAdmin) {
    return (
      <div className="grid grid-cols-[300px,1fr] h-screen">
        <NavBar />
        <main className="bg-lightGray w-full h-full p-10">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default AdminRoute;
