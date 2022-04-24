import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(window.scrollTo(0, 0), 1000);
  }, [location]);
  return null;
}
