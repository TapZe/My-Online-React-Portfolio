import AwardCard from "../components/AwardCard";
import awardsData from "../data/AwardsData";

const Awards = () => {
  return (
    <main className="flex-grow flex self-center items-center my-4 md:px-32 lg:px-48 xl:px-56">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          Awards & Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {awardsData.map((award) => (
            <AwardCard key={award.credId} {...award} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Awards;
