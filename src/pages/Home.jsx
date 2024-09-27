import ContactIcons from "../components/ContactIcons";

const Home = () => {
  return (
    <main className="flex-grow flex justify-center self-center items-center px-4 md:px-32 lg:px-48 xl:px-56 gap-x-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col mr-0 md:mr-4 mb-4 md:mb-0">
          <p className="text-3xl font-bold mb-4">
            Muhammad Nabil Muyassar Rahman
          </p>
          <p className="text-l mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            rerum. Debitis accusantium deleniti enim iste dignissimos?
            Similique, exercitationem! Odit vero, numquam quae ratione maxime
            sunt reiciendis laudantium quaerat iure ipsum!
          </p>
          <ContactIcons />
        </div>
        <div className="md:w-full">
          <img
            src="https://skillicons.dev/icons?i=aws,gcp,react,laravel,mongodb,mysql&perline=3"
            className="w-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
