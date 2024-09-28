import AwardCard from "../components/AwardCard";

const awardsData = [
  {
    credId: "72202 2132 02716 2022",
    title: "Junior Web Programmer",
    year: "2022",
    link: "https://drive.google.com/file/d/1NcGlsFxpjdCOVhIULO-gFcKKy8qGKaBV/view?usp=drive_link",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHBb4i_YPZiDASeyE1vBIVE8D0dGPVcQuYA&s", // Replace with actual image URL
  },
  {
    credId: "410d7f4c-a07d-472d-873e-520cb710c64e",
    title: "Artificial Intelligence BIZ (AIBIZ)",
    year: "2023",
    link: "https://www.credential.net/410d7f4c-a07d-472d-873e-520cb710c64e",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-xmuYCqFEwpctA7cmTpY3v8p_IeDTlF3Hw&s", // Replace with actual image URL
  },
  {
    credId: "2006927840-111",
    title: "Game dan Animasi (Talent Scouting Academy)",
    year: "2023",
    link: "https://digitalent.kominfo.go.id/cek-sertifikat",
    image:
      "https://aptika.kominfo.go.id/wp-content/uploads/2019/09/digitalent-e1568964668804.jpg", // Replace with actual image URL
  },
  {
    credId: "72102 3121 00998 2023",
    title: "Junior Office Operator",
    year: "2023",
    link: "https://drive.google.com/file/d/1b4E_vs_Z9bybKZmxbVGrh5n2AwJ0uUR7/view?usp=drive_link",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHBb4i_YPZiDASeyE1vBIVE8D0dGPVcQuYA&s", // Replace with actual image URL
  },
  {
    credId: "tapze-bedaa",
    title: "Back End Development and APIs",
    year: "2024",
    link: "https://freecodecamp.org/certification/TapZe/back-end-development-and-apis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png", // Replace with actual image URL
  },
];

const Awards = () => {
  return (
    <main className="flex-grow flex self-center items-center my-4 md:px-32 lg:px-48 xl:px-56">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          Awards & Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {awardsData.map((award) => (
            <AwardCard
              key={award.credId}
              credId={award.credId}
              image={award.image}
              year={award.year}
              link={award.link}
              title={award.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Awards;
