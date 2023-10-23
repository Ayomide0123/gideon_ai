import Gideon from "../assets/gideon_icon.jpg";
import LogoutBtn from "./LogoutBtn";
import ProfileBtn from "./ProfileBtn";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={Gideon} alt="gideon_icon" className="w-20 object-contain" />
          <h1 className="font-extrabold text-black sm:text-xl text-center">
            Gideon
          </h1>
        </div>

        <div className="flex flex-col">
          <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            <ProfileBtn api={hankoApi} />
          </button>
          <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <LogoutBtn api={hankoApi} />
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with&nbsp;
        <br className="md:hidden" />
        <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Gideon
        </span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Gideon, an AI article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
