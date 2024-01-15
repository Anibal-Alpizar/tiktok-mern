import { Link } from "react-router-dom";
import { navigation } from "./navigation";

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-950 text-white py-5 px-10">
      {navigation.map(({ href, name, icon: Icon }, i) => {
        return (
          <Link to={href} key={i}>
            <Icon />
            <h1>{name}</h1>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
