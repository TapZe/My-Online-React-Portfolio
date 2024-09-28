import MyFoto from "../assets/HeroFoto.jpg";

const About = () => {
  return (
    <main className="flex-grow flex self-center items-center px-4 md:px-32 lg:px-48 xl:px-56">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={MyFoto} className="max-w-xs rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold pb-6">
            I'm a Full-Stack Developer!
          </h1>
          <div className="text-justify space-y-3">
            <p>
              As an experienced{" "}
              <span className="font-bold">Full-Stack Developer</span>, I
              specialize in creating high-performing web applications and
              managing IT projects with precision. My expertise spans a range of
              programming languages including{" "}
              <span className="font-bold">
                Java, JavaScript, Python, and PHP
              </span>
              , paired with hands-on experience using frameworks such as{" "}
              <span className="font-bold">Laravel, Flask, and NodeJS</span>.
            </p>
            <p>
              With a strong background in server management—both{" "}
              <span className="font-bold">cloud-based (AWS)</span> and{" "}
              <span className="font-bold">on-premise (Proxmox)</span>—and
              database systems like <span className="font-bold">SQL</span> and{" "}
              <span className="font-bold">NoSQL</span>, I ensure smooth,
              efficient deployments and seamless technical operations. I’m
              dedicated to optimizing technology and providing tailored
              solutions that align with the specific needs of businesses.
            </p>
            <p>
              Collaboration is at the heart of my work. I partner with
              organizations to not only solve complex technical challenges but
              to drive their success through efficient and reliable solutions.
              From server configuration and troubleshooting to delivering
              software that scales, my focus is on helping you achieve your
              goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
