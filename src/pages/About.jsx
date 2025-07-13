import MyFoto from "../assets/HeroFoto.jpg";

const About = () => {
  return (
    <main className="flex-grow flex self-center items-center md:px-32 lg:px-48 xl:px-56">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={MyFoto} className="max-w-xs rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold pb-6">About Me</h1>
          <h2 className="text-xl font-bold pb-3">
            Full-Stack Developer & Tech Enthusiast
          </h2>
          <div className="text-justify space-y-3">
            <p>
              I am{" "}
              <span className="font-bold">Muhammad Nabil Muyassar Rahman</span>,
              a passionate{" "}
              <span className="font-bold">Full-Stack Developer</span> from
              Central Jakarta, Indonesia. My toolkit spans modern frameworks
              like{" "}
              <span className="font-bold">
                Next.js, NestJS, ExpressJS, Laravel,
              </span>
              and <span className="font-bold">Flask</span>, backed by strong
              proficiency in{" "}
              <span className="font-bold">
                TypeScript, JavaScript, Python, PHP, and Java
              </span>
              .
            </p>
            <p>
              I architect and deliver high-performance, scalable applications,
              managing infrastructure across{" "}
              <span className="font-bold">AWS</span> and{" "}
              <span className="font-bold">Proxmox</span> environments. Whether
              working with <span className="font-bold">SQL</span> or{" "}
              <span className="font-bold">NoSQL </span>
              databases, I consistently optimize systems to exceed client
              expectations.
            </p>
            <p>
              Highlights of my journey include enhancing the Pulau Intan Lestari
              modules and revamping the Radar Banjarmasin Digital Website—both
              of which saw notable boosts in user engagement and performance. A
              collaborative problem-solver at heart, I am driven to keep
              learning, growing, and building tech that leaves a positive,
              global impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
