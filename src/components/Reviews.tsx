import { ReviewsData } from "../shared/constants/data";
import QuotesIcon from "../shared/icons/quotes-icon";
import UiSectionLabel from "../shared/ui/ui-section-label";
import UiSectionTitle from "../shared/ui/ui-section-title";
import image from "../assets/author.jpg";
import CreateReview from "../features/review/ui/create-review";

const Reviews = () => {
  return (
    <div className="my-20 px-8 2xl:px-36">
      <UiSectionLabel>відгуки</UiSectionLabel>
      <UiSectionTitle className="mt-1">Що говорять наші клієнти</UiSectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {ReviewsData.map((review) => (
          <div
            key={review.text}
            className="bg-white shadow-xl p-6 lg:p-10 rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl text-bl">
                <QuotesIcon />
              </div>
              <p className="leading-7 text-lg mt-5">{review.text}</p>
            </div>

            <div className="mt-7 flex items-center gap-6">
              <div className="rounded-full overflow-hidden w-12 h-12 md:w-16 md:h-16 block">
                <img className="w-full h-full" src={image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg text-bl leading-5">
                  {review.author.name}
                </div>
                <div>{review.author.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 shadow-xl p-10">
        <h3 className="uppercase font-bold text-2xl mb-4">Поділіться своїм враженням</h3>
        <CreateReview />
      </div>
    </div>
  );
};

export default Reviews;
