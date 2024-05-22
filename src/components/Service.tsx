import { ServiceData } from "../shared/constants/data";
import UiButton from "../shared/ui/ui-button";
import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";

const Service = () => {
  return (
    <div className="my-20 px-8 2xl:px-36">
      <UiSectionLabel>що ми пропонуємо</UiSectionLabel>
      <UiSectionTitle className="mt-1">
        Ознайомтеся з нашими послугами
      </UiSectionTitle>

      <div className="grid grid-cols-1 ph:grid-cols-3 gap-6 ph:gap-2 sm:gap-5 mt-8">
        {ServiceData.map((data) => (
          <div
            key={data.title}
            className="shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-full">
              <img className="w-full" src={data.image} alt="" />
            </div>

            <div className="px-4 uppercase text-bl text-base ph:text-sm lg:text-xl py-5 text-center font-bold">
              {data.title}
            </div>
          </div>
        ))}
      </div>

      <UiButton className="mx-auto mt-10" variant="lined">
        переглянути Додаткові послуги
      </UiButton>
    </div>
  );
};

export default Service;
