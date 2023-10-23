import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const ProfileBtn = () => {
  const navigate = useNavigate();

  const redirectToApp = () => {
    navigate("/profile");
  };

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <button
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      onClick={redirectToApp}
    >
      Profile
    </button>
  );
};

export default ProfileBtn;
