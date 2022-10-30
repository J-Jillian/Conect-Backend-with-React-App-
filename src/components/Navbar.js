import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>

        <NavLink to="/">
          <button>Add Apartment</button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
