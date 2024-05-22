import { ContactInfoData } from "../shared/constants/data";
import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";
import image from "../assets/way-bg.png";
import AppointmentCreateForm from "../features/appointment/ui/appointment-create-form";

const Appointment = () => {
  return (
    <div className="w-full py-16 text-white" id="appointment">
      <div className="bg-bl relative pt-24 pb-40 2md:pb-60 2xl:pb-32 pl-8 2xl:pl-36 pr-8 2md:pr-72 w-full 2md:w-3/4">
        <div className="2md:max-w-xl">
          <UiSectionLabel className="text-white">
            призначити зустріч
          </UiSectionLabel>
          <UiSectionTitle>
            Довіртеся нашому сервісу, щоб повернутись на дорогу!
          </UiSectionTitle>
          <p className="leading-7 text-lg mt-4">
            Запрошуємо на зустріч з нами, щоб швидко та якісно вирішити ваші
            автомобільні потреби! Довіртеся нашому сервісу для надійного
            обслуговування.
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            {ContactInfoData.map((data) => (
              <li key={data.title}>
                <div className="flex items-center gap-5">
                  <div className="text-3xl w-16 h-16 rounded-full flex items-center justify-center bg-gr">
                    <data.icon />
                  </div>
                  <div>
                    <div className="font-bold text-xl uppercase">
                      {data.title}
                    </div>
                    <div>
                      {data.type === "phone" ? (
                        <a href={"tel:" + data.text}>{data.text}</a>
                      ) : data.type === "email" ? (
                        <a href={"mailto:" + data.text}>{data.text}</a>
                      ) : (
                        data.text
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-black shadow-lg relative 2md:absolute mx-auto px-6 pt-10 pb-8 ph:p-10 2md:max-w-[400px] mt-16 2md:mt-0 bg-white 2md:top-[50%] 2md:right-0 2md:translate-y-[-50%] 2md:translate-x-[50%] z-20">
          <h3 className="text-3xl font-bold uppercase">
            як ми можемо допомогти?
          </h3>
          <AppointmentCreateForm />
        </div>
        <img src={image} className="absolute right-0 bottom-0" alt="" />
      </div>
    </div>
  );
};

export default Appointment;
