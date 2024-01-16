import { Link } from "react-router-dom";
import { navigations, mainNavigation as logo } from "./navigation";

function Navbar() {
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
      <div className="flex gap-x-5">
        {navigations.map(({ href, name, icon: Icon }, i) => {
          return (
            <Link className="flex items-center gap-x-2" to={href} key={i}>
              <h1
                className={`flex justify-center items-center gap-x-2 font-bold ${
                  name === "Upload" ? "custom-upload-style" : ""
                }`}
                style={
                  name === "Upload"
                    ? { backgroundColor: "#1B1B1B", padding: "10px" }
                    : {}
                }
              >
                <Icon />
                {name}
              </h1>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
