import Gideon from "../assets/gideon_icon.jpg";
import LogoutBtn from "./LogoutBtn";
import ProfileBtn from "./ProfileBtn";
import User from "../assets/user_profile.png";
import { useState, useRef, useEffect } from "react";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const Hero = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={Gideon} alt="gideon_icon" className="w-20 object-contain" />
          <h1 className="font-extrabold text-black sm:text-xl text-center">
            Gideon
          </h1>
        </div>
        <div className="md:flex flex-col sm:hidden">
          <ProfileBtn api={hankoApi} />
          <LogoutBtn api={hankoApi} />
        </div>

        <div className="md:hidden" ref={dropdownRef}>
          <img
            src={User}
            alt="user_profile"
            className="w-10 cursor-pointer absolute top-10 right-16"
            onClick={toggleDropdown}
          />
          {isDropdownVisible && (
            <>
              <div className="absolute w-4 h-4 bg-slate-200 transform rotate-45 -mt-1 top-[85px] right-20"></div>
              <div className=" flex flex-col bg-slate-200 absolute top-[80px] right-6 mt-2 mr-2 p-5">
                <ProfileBtn api={hankoApi} />
                <LogoutBtn api={hankoApi} />
              </div>
            </>
          )}
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
