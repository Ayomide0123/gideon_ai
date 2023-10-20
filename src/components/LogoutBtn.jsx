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

  return <button onClick={logout}>Logout</button>;
}

export default LogoutBtn;
