import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Iconly } from "react-iconly";
const Navigation = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="1NFT" className="logo" />
      <ul className="menu-list">
        <li>
          <Link to="/">
            <Iconly primaryColor="black" set="bold" name="Home" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Iconly
              set="light"
              name="Image2"
              primaryColor="darkgray"
              stroke="bold"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Iconly
              set="light"
              name="Bag"
              primaryColor="darkgray"
              stroke="bold"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Iconly
              set="light"
              name="Star"
              primaryColor="darkgray"
              stroke="bold"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Iconly
              set="light"
              name="User"
              primaryColor="darkgray"
              stroke="bold"
            />
          </Link>
        </li>
      </ul>
      <Link to="/">
        <Iconly
          set="light"
          name="Setting"
          primaryColor="darkgray"
          stroke="bold"
        />
      </Link>
    </nav>
  );
};

export default Navigation;
