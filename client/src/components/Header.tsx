import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>TikTokMern</h1>
      </Link>
      <ul>
        <li>
          <Link to="/new">Upload my video</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
