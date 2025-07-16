import ContactIcons from "../components/ContactIcons";
import SkillsIcons from "../components/SkillsIcons";

const Home = () => {
  return (
    <main className="flex-grow flex self-center items-center px-4 md:px-32 lg:px-48 xl:px-56 gap-x-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col mr-0 md:mr-4 mb-4 md:mb-0">
          <p className="text-3xl font-bold mb-4">
            Muhammad Nabil Muyassar Rahman
          </p>
          <p className="text-l mb-4">
            I am a dedicated <span className="font-bold">Full-Stack Developer</span> based in{" "}
            Central Jakarta, Indonesia. Leveraging modern frameworks such as{" "}
            <span className="font-bold">Next.js, NestJS, ExpressJS, Laravel</span>, and{" "}
            <span className="font-bold">Flask</span>, I build high-performance, scalable{" "}
            solutions that align with strategic business objectives. Proficient{" "}
            in <span className="font-bold">TypeScript, JavaScript, Python, PHP,</span> and{" "}
            <span className="font-bold">Java</span>, I pair solid coding skills with proven{" "}
            experience orchestrating <span className="font-bold">AWS</span> and{" "}
            on-premise <span className="font-bold">Proxmox</span> infrastructure. My work on{" "}
            mission-critical products—such as Pulau Intan Lestari modules and the{" "}
            Radar Banjarmasin Digital Website—has consistently elevated user{" "}
            experience and engagement.
          </p>
          <ContactIcons />
        </div>
        <div className="md:w-full">
          <SkillsIcons
            icons={
              "nextjs,nestjs,express,laravel,flask,react,ts,js,python,php,java,aws,mongodb,mysql"
            }
            perLine={5}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
