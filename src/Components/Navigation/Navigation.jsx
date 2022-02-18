import "./Navigation.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Iconly } from "react-iconly";
import { useSelector } from "react-redux";

const items = [
  { name: "Home", to: "/", color: "black", set: "bold" },
  { name: "Image2", to: "/gallery" },
  { name: "Bag", to: "/cart", badge: true },
  { name: "Star", to: "/saved" },
  { name: "User", to: "/profile" },
];
const Navigation = () => {
  const cartData = useSelector((state) => state.cart);
  const { cart } = cartData;
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
              {item.badge && cart.length > 0 && (
                <span className="badge">
                  {cart.length < 10 ? "0" + cart.length : cart.length}
                </span>
              )}
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
