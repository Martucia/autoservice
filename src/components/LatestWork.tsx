import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";
import image from "../assets/s1.jpg";
import CircleIcon from "../shared/icons/circle-icon";
import { LatestWorkData } from "../shared/constants/data";

const LatestWork = () => {
  return (
    // pl-36
    <div className="w-full my-32 flex relative justify-end">
      <div className="w-full md:w-4/5 lg:w-2/3 lg:relative">
        <div className="px-6 py-12 ph:p-12 w-full max-w-[90%] sm:max-w-md bg-white shadow-xl z-20 absolute left-[50%] sm:left-8 lg:left-0 top-[50%] translate-y-[-50%] translate-x-[-50%] sm:translate-x-[0] lg:translate-x-[-50%]">
          <UiSectionLabel>наша остання робота</UiSectionLabel>
          <UiSectionTitle className="mb-2">
            {LatestWorkData.name}
          </UiSectionTitle>
          <p className="leading-7 text-lg">{LatestWorkData.description}</p>
          <ul className="mt-5">
            {LatestWorkData.options.map((option) => (
              <li key={option} className="flex items-center gap-2">
                <span className="text-sm text-bl">
                  <CircleIcon />
                </span>
                <span className="leading-8">{option}</span>
              </li>
            ))}
          </ul>
        </div>

        <img className="z-0 w-full h-[460px] sm:h-auto" src={image} alt="" />
      </div>
    </div>
  );
};

export default LatestWork;
