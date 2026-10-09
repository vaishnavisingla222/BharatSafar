
import { useEffect } from "react";
import "./Logo.css";

function Logo({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <img
        src="/companyLogo.png"
        alt="BharatSafar Logo"
        className="splash-logo"
      />
    </div>
  );
}

export default Logo;
