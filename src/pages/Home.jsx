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
            I am a Full-Stack Developer with expertise in web development and IT
            project management. Skilled in Java, JavaScript, Python, PHP, and
            frameworks like Laravel, Flask, and NodeJS, I deliver efficient
            software solutions tailored to business needs. My experience
            includes managing cloud (AWS) and on-premise (Proxmox) servers, SQL
            and NoSQL databases, and ensuring seamless project execution. With a
            strong foundation in server configuration, hosting, and
            troubleshooting, I’m committed to partnering with organizations to
            optimize their technology, implement efficient solutions, and drive
            their goals to success with precision and confidence.
          </p>
          <ContactIcons />
        </div>
        <div className="md:w-full">
          <SkillsIcons
            icons={"aws,py,nodejs,laravel,mongodb,mysql"}
            perLine={3}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
