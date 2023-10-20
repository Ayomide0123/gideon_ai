import Gideon from "../assets/gideon_icon.jpg";
import LogoutBtn from "./LogoutBtn";
import ProfileBtn from "./ProfileBtn";

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

        <div>
          <ProfileBtn />
          <LogoutBtn />
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">Gideon</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Gideon, an AI article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
