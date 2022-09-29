import { Link } from "react-router-dom";
import currency from "../images/currency.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={currency}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Currency Converter
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
