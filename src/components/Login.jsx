import { register, Hanko } from "@teamhanko/hanko-elements";
import { useCallback, useEffect, useMemo } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import gideonWelcome from "../assets/gideon_Welcome.png";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const Login = () => {
  // const navigate = useNavigate();
  // const redirectToApp = useCallback() => {
  //   navigate("/app");
  // };

  // useEffect(() => {
  //   register(hankoApi ?? "").catch((error) => {
  //     console.log(error);
  //   });
  //   document.addEventListener("hankoAuthSuccess", redirectToApp);
  //   return () => {
  //     document.removeEventListener("hankoAuthSuccess", redirectToApp);
  //   };
  // }, [redirectToApp]);

  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/app");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    // <div className="flex min-h-screen justify-center items-center ">
    // </div>
    <div className="gradient flex justify-between">
      <div className="w-1/2 h-screen flex items-start justify-center">
        <div className="flex flex-col items-center">
          <img src={gideonWelcome} alt="gideonWelcome" className="max-w-xs" />

          <div className="p-1">
            <h1 className="typing-demo mt-1 text-4xl font-extrabold leading-[1.15] text-white text-center">
              Hi, I&apos;m
              <span className="blue_gradient"> Gideon!</span>
            </h1>
            <p className="mt-3 text-2xl font-extrabold leading-[1.15] text-white text-center px-6 typing-demo">
              Your
              <span className="blue_gradient"> friendly AI assistant. </span>
              <br />
              <br />
              If you&apos;ve got a lengthy article that needs simplifying,
              <br />
              I&apos;m here to help you out!
            </p>
            <br />
            <p className="text-2xl font-extrabold leading-[1.15] text-white text-center px-3 typing-demo">
              <span className="blue_gradient">Sign In </span>to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <hanko-auth api={hankoApi} />
      </div>
    </div>
  );
};

export default Login;
