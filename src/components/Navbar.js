import React from "react";
import NavBarSearch from "./reusables/NavBarSearch";
import NavBarLogin from "./reusables/NavBarLogin";
import NavBarMenu from "./reusables/NavBarMenu";

const Navbar = () => {
  const _navStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px"
  };
  return (
    <div style={_navStyles}>
      <NavBarSearch />
      <NavBarMenu />
      <NavBarLogin />
    </div>
  );
};

export default Navbar;
