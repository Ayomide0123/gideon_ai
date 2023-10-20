import { register } from "@teamhanko/hanko-elements";
import { useEffect } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const redirectToApp = () => {
    navigate("/app");
  };

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
    document.addEventListener("hankoAuthSuccess", redirectToApp);
    return () => {
      document.removeEventListener("hankoAuthSuccess", redirectToApp);
    };
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center ">
      <hanko-auth api={hankoApi} />
    </div>
  );
};

export default Login;
