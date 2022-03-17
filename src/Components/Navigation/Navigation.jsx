import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";
import { useSelector } from "react-redux";
import { useState } from "react";

const items = [
  { name: "Home", to: "/" },
  { name: "Image2", to: "/gallery" },
  { name: "Bag", to: "/cart", badge: true },
  { name: "Star", to: "/saved" },
  { name: "User", to: "/profile" },
];
const Navigation = () => {
  const [pathname, setpathname] = useState("");
  const cartData = useSelector((state) => state.cart);
  const { cart } = cartData;
  function clickH(to) {
    setpathname(to);
  }

  return (
    <nav className="navbar">
      <ul className="menu-list">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? " activated" : "")}
                onClick={() => clickH(item.to)}
              >
                <Iconly
                  primaryColor={pathname === item.to ? "black" : "darkgray"}
                  set={"light"}
                  name={item.name}
                  stroke="bold"
                  filled={pathname === item.to ? true : false}
                />
              </NavLink>
              {item.badge && cart.length > 0 && (
                <span className="badge">
                  {cart.length < 10 ? "0" + cart.length : cart.length}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <NavLink
        to="/setting"
        className={({ isActive }) =>
          "nav-link" + (isActive ? " activated" : "")
        }
        onClick={() => clickH("/setting")}
      >
        <Iconly
          set="light"
          name="Setting"
          primaryColor={pathname === "/setting" ? "black" : "darkgray"}
          stroke="bold"
          filled={pathname === "/setting" ? true : false}
        />
      </NavLink>
    </nav>
  );
};

export default Navigation;
