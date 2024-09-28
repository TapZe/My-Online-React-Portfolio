import InterestCard from "../components/InterestCard";

const Interest = () => {
  return (
    <main className="flex-grow flex self-center items-center my-4 md:px-32 lg:px-48 xl:px-56">
      <div className="flex flex-col my-4">
        <h1 className="text-3xl font-bold pb-6">Interest</h1>
        <InterestCard title={"Game Development"}>
          There is a strong enthusiasm for designing and developing video games,
          focusing on exploring innovative game mechanics and engaging
          storytelling. This passion drives a continuous exploration of how
          interactive narratives can create immersive experiences for players.
        </InterestCard>
        <InterestCard title={"UI/UX Design"}>
          An interest in creating user-friendly interfaces and enhancing user
          experiences in software applications is at the core of my design
          philosophy. By prioritizing usability and accessibility, the goal is
          to ensure that technology is not only functional but also enjoyable to
          use.
        </InterestCard>
        <InterestCard title={"Emerging Technologies"}>
          A passion for staying up-to-date with the latest trends in artificial
          intelligence, machine learning, and cloud computing fuels an ongoing
          commitment to learning and adapting. Engaging with these technologies
          opens up exciting possibilities for future projects and solutions.
        </InterestCard>
        <InterestCard title={"Online Course"}>
          Enjoyment in taking online courses allows for broadening knowledge in
          various tech fields, such as data science and blockchain technology.
          This commitment to continuous learning fosters a growth mindset and
          keeps skills relevant in a rapidly evolving industry.
        </InterestCard>
        <InterestCard title={"Reading"}>
          As an avid reader, there is a particular interest in novels that
          incorporate real physics, which not only entertains but also inspires
          curiosity about the natural world. These stories often blend
          scientific principles with engaging narratives, offering both
          enjoyment and education.
        </InterestCard>
        <InterestCard title={"Outdoor Activities"}>
          Participation in outdoor activities such as badminton, biking, and
          running promotes a healthy and balanced lifestyle. These sports not
          only provide physical exercise but also serve as a refreshing break
          from technology, allowing for mental rejuvenation and creativity to
          flourish.
        </InterestCard>
      </div>
    </main>
  );
};

export default Interest;
