import { FeaturedData } from "../shared/constants/data";

const Featured = () => {
  return (
    <div className="bg-bl py-9 px-8 2xl:px-36 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mx-auto">
        {FeaturedData.map((data) => (
          <div
            key={data.title}
            className="flex gap-6 lg:items-center flex-col lg:flex-row"
          >
            <div className="text-4xl sm:text-5xl">
              <data.icon />
            </div>
            <div>
              <h3 className="font-bold text-xl uppercase">{data.title}</h3>
              <p className="text-base mt-2 sm:max-w-80">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
