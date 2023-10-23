import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import "../App.css";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="gradient flex justify-center items-center">
      <div>
        <hanko-profile api={hankoApi} />
      </div>
    </div>
  );
}
