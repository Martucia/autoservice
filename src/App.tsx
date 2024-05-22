import { Toaster } from "react-hot-toast";
import Appointment from "./components/Appointment";
import Banner from "./components/Banner";
import FAQs from "./components/FAQs";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LatestWork from "./components/LatestWork";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import WhoWeAre from "./components/WhoWeAre";
import Registration from "./features/auth/ui/registration";
import { useModalsContext } from "./context/modalsContext";
import Login from "./features/auth/ui/login";

function App() {
  const { isRegistrationModalOpen, isLoginModalOpen } = useModalsContext();

  return (
    <div className="max-w-screen overflow-hidden">
      <Banner />
      <Featured />
      <WhoWeAre />
      <Service />
      <LatestWork />
      <Reviews />
      <Appointment />
      <FAQs />
      <Footer />

      {isRegistrationModalOpen && <Registration />}
      {isLoginModalOpen && <Login />}

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 6000,
        }}
      />
    </div>
  );
}

export default App;
