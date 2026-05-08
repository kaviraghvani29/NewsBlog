import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setSearchText }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearchText(search);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>NewsHub</h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/business">Business</NavLink>
        </li>

        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>

        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>

        <li>
          <NavLink to="/health">Health</NavLink>
        </li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchText(e.target.value);
          }}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
