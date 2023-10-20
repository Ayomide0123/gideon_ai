import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function RoutePreserver() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Read the preserved route from local storage
    const preservedRoute = localStorage.getItem("preservedRoute");

    // If a preserved route exists and it's not the same as the current location, navigate to it.
    if (preservedRoute && preservedRoute !== location.pathname) {
      history.push(preservedRoute);
    }
  }, [location, history]);

  // Save the current route to local storage when the component unmounts (page refresh)
  useEffect(() => {
    localStorage.setItem("preservedRoute", location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
}

export default RoutePreserver;
