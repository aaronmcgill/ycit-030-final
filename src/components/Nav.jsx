import { Link } from "react-router-dom";
import "../App.css";
import logo from "../logo.png";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <div className="brand">
              <img src={logo} alt="Gap logo" />
            </div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/organic-t-shirts">Organic T-Shirts</Link>
          </li>
          <li>
            <Link to="/regular-t-shirts">Regular T-Shirts</Link>
          </li>
          {/* <li>
            <Link to="/Cart">Cart</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
