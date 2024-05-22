import PhoneIcon from "../shared/icons/phone-icon";
import UiButton from "../shared/ui/ui-button";
import backgroundImage from "../assets/banner-bg.png";
import { scrollToAppointment } from "../utils/functions";
import Header from "./Header";

const Banner = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-full flex items-center px-8 md:px-20 lg:px-36 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 80%)`,
        }}
      >
        <Header />

        <div className="max-w-3xl w-full">
          <h1 className=" text-4xl text-white line leading-[50px] font-bold uppercase break-words md:break-normal lg:text-6xl lg:leading-[70px] text-pretty">
            Сертифікований експерт з ремонту автомобілів
          </h1>
          <p className="text-xl text-white mt-4 leading-[40px] max-w-2xl text-pretty">
            Ми пропонуємо добре підготовлених механіків і чудове обслуговування
            клієнтів за конкурентоспроможними цінами на ремонт автомобіля у вас
            вдома чи на роботі.
          </p>
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-6 mt-6">
            <UiButton
              onClick={() => scrollToAppointment("appointment")}
              className="py-4 px-12"
              variant="primary"
            >
              Призначити зустріч
            </UiButton>
            <div className="flex gap-3 items-center text-white">
              <div className="text-3xl">
                <PhoneIcon />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <a href="tel:+380 97 670 8905">+380 97 670 8905</a>
                </div>
                <div className="text-xs font-bold opacity-90">
                  Цілодобова екстрена допомога
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
