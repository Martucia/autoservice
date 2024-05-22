import image1 from "../assets/i1.png";
import image2 from "../assets/i2.jpg";
import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";

const WhoWeAre = () => {
  return (
    <div className="my-20 px-8 2xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr,3fr] gap-12 2xl:gap-28">
      <div className="w-full hidden md:block">
        <img className="w-full" src={image1} alt="" />
      </div>
      <div>
        <UiSectionLabel>Хто ми</UiSectionLabel>
        <UiSectionTitle className="mt-1">
          Сертифікований Ремонт та обслуговування автомобілів
        </UiSectionTitle>

        <div className="mt-6 text-lg">
          Сертифікований центр ремонту та обслуговування автомобілів. Досвід та
          професіоналізм для вашого комфорту і безпеки на дорозі.
        </div>

        <img className="mt-6 w-full" src={image2} alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
