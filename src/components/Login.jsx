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
    <div>
      <div className="md:block sm:hidden">
        <div className="gradient justify-between flex">
          <div className="w-1/2 h-screen flex items-start justify-center">
            <div className="flex flex-col items-center">
              <img
                src={gideonWelcome}
                alt="gideonWelcome"
                className="max-w-xs"
              />

              <div className="p-1">
                <h1 className="mt-1 text-4xl font-extrabold leading-[1.15] text-white text-center">
                  Hi, I&apos;m
                  <span className="blue_gradient"> Gideon!</span>
                </h1>
                <p className="mt-3 text-2xl font-extrabold leading-[1.15] text-white text-center px-6">
                  Your
                  <span className="blue_gradient">
                    {" "}
                    friendly AI assistant.{" "}
                  </span>
                  <br />
                  <br />
                  If you&apos;ve got a lengthy article that needs simplifying,
                  <br />
                  I&apos;m here to help you out!
                </p>
                <br />
                <p className="text-2xl font-extrabold leading-[1.15] text-white text-center px-3">
                  <span className="blue_gradient">Sign In </span>to get started.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-screen flex items-center justify-center">
            <hanko-auth api={hankoApi} />
          </div>
        </div>
      </div>
      <div className="md:hidden sm:flex flex-col min-h-screen items-center gradient">
        <div className="flex flex-col items-center">
          <img src={gideonWelcome} alt="gideonWelcome" className="max-w-xs" />
          <h1 className="mb-2 text-3xl font-bold leading-[1.15] text-white text-center">
            Hi, I&apos;m
            <span className="blue_gradient"> Gideon!</span>
          </h1>
          <p className="mt-3 mb-3 text-xl font-bold leading-[1.15] text-white text-center px-6">
            If you&apos;ve got a lengthy article that needs simplifying,
            <br />
            I&apos;m here to help you out!
          </p>
        </div>
        <div className="mt-5">
          <hanko-auth api={hankoApi} />
        </div>
      </div>
    </div>
  );
};

export default Login;
