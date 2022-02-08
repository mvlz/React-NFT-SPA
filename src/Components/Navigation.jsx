import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default Navigation;
