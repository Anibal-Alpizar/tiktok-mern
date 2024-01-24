import { useState } from "react";
import { Link } from "react-router-dom";
import { navigations, mainNavigation as logo } from "./navigation";
import LoginCard from "../login/LoginCard";

function Navbar() {
  const [showLoginCard, setShowLoginCard] = useState(false);

  const handleLoginClick = () => {
    setShowLoginCard(true);
  };

  return (
    <nav
      className="flex justify-between text-white py-1 px-10"
      style={{ backgroundColor: "#121212", borderBottom: "5px solid #151515" }}
    >
      {logo.map(({ href, name, icon: Icon }, i) => {
        return (
          <Link className="flex items-center gap-x-2" to={href} key={i}>
            <Icon />
            <h1 className="font-bold text-3xl">{name}</h1>
          </Link>
        );
      })}
      <div className="flex gap-x-2">
        {navigations.map(({ href, name, icon: Icon }, i) => {
          return (
            <Link className="flex items-center gap-x-2" to={href} key={i}>
              <h1
                className={`flex justify-center items-center gap-x-4 font-medium ${
                  name === "Upload" ? "" : ""
                }`}
                style={
                  name === "Upload"
                    ? {
                        backgroundColor: "#1B1B1B",
                        padding: "6px 15px 5px 0px ",
                        borderRadius: "3px",
                      }
                    : name === "Log in"
                    ? {
                        backgroundColor: "#EF2950",
                        padding: "6px 15px 6px 15px",
                        borderRadius: "3px",
                        margin: "5px",
                      }
                    : {}
                }
                onClick={name === "Log in" ? handleLoginClick : undefined}
              >
                {Icon && <Icon />}
                {name}
              </h1>
            </Link>
          );
        })}
      </div>
      {showLoginCard && <LoginCard onClose={() => setShowLoginCard(false)} />}
    </nav>
  );
}

export default Navbar;
