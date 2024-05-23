import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Admin = () => {
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
};

export default Admin;
