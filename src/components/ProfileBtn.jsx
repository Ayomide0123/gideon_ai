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

  return <button onClick={redirectToApp}>Profile</button>;
};

export default ProfileBtn;
