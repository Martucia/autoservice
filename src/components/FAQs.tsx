import { FAQsData } from "../shared/constants/data";
import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <div className="my-20 px-8 2xl:px-36">
      <UiSectionLabel>FAQs</UiSectionLabel>
      <UiSectionTitle>Питання що часто задаються</UiSectionTitle>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {FAQsData.map((data) => (
          <FAQ key={data.title} text={data.text} title={data.title} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
