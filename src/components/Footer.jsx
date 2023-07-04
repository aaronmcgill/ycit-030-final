import { Link } from "react-router-dom";
import "../App.css";
import logo from "../logo.png";

const Footer = () => {
  return (
    <footer>
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
            <Link to="/t-shirts">T-Shirts</Link>
          </li>
          <li>
            <Link to="/t-shirts">T-Shirts</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
        <p>© 2023 THE GAP, INC.</p>
    </footer>
  );
};

export default Footer;
