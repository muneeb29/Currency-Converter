import { Link } from "react-router-dom";
import currency from "../images/currency.svg";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src={currency}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Currency Converter
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
