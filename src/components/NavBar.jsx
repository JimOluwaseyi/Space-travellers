import React from "react";
import "../styleComponents/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbarContainer">
      <div className="navImage">
        <img src="../src/image/planet.png" alt="" />
        <span>Space Traveler's Hub</span>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/"> Rockets </Link>
        </li>
        <li>
          <Link to="/mission"> Mission </Link>
        </li>
        <li>
          <Link to="/myprofile" className="border">
            My Profile
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
