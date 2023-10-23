import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@teamhanko/hanko-elements";
import { Hanko } from "@teamhanko/hanko-frontend-sdk";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

function LogoutBtn() {
  const hanko = new Hanko(hankoApi);
  const navigate = useNavigate();

  const logout = () => {
    hanko.user.logout().then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    register({});
  }, []);

  return (
    <button
      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      onClick={logout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
