import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Iconly } from "react-iconly";

const items = [
  { name: "Home", to: "/", color: "black", set: "bold" },
  { name: "Image2", to: "/gallery" },
  { name: "Bag", to: "/cart" },
  { name: "Star", to: "/saved" },
  { name: "User", to: "/profile" },
];
const Navigation = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="1NFT" className="logo" />
      <ul className="menu-list">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>
                <Iconly
                  primaryColor={item.color ? item.color : "darkgray"}
                  set={item.set ? item.set : "light"}
                  name={item.name}
                  stroke="bold"
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/setting">
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
