import { useState } from "react";
import { Link } from "react-router-dom";
import { navigations, mainNavigation as logo } from "./navigation";
import LoginCard from "../login/LoginCard";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const { isAuth, user } = useAuth();
  const [showLoginCard, setShowLoginCard] = useState(false);

  const handleLoginClick = () => {
    setShowLoginCard(true);
  };

  return (
    <nav
      className="flex justify-between text-white py-3 px-9"
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
          if (name === "Log in" && isAuth) {
            return null;
          }

          return (
            <Link className="flex items-center gap-x-2" to={href} key={i}>
              <h1
                className={`flex justify-center items-center text-center gap-x-4 p-1 font-medium ${
                  name === "Upload" ? "bg-neutral-800" : ""
                } ${name === "Log in" ? "bg-pink-800" : ""}`}
                style={
                  name === "Log in"
                    ? {
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
        {isAuth ? (
          <h1 className="flex items-center gap-x-2">Hi, {user.name}!</h1>
        ) : (
          ""
        )}
      </div>
      {showLoginCard && <LoginCard onClose={() => setShowLoginCard(false)} />}
    </nav>
  );
}

export default Navbar;
