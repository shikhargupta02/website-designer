import { useLocation } from "react-router-dom";
import "./loader.scss";
import { useEffect, useState } from "react";
import { LoaderSVG } from "./LoaderSVG";
export const Loader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader-wrapper">
            <LoaderSVG />
          </div>
        </div>
      )}
    </>
  );
};
