import React from "react";
import { Avatar } from "@material-ui/core";
const NavBarLogin = () => {
  return (
    <>
      <Avatar
        alt="user image"
        src={require("../../assets/images/no-user.jpg")}
        style={{ marginTop: "22px", marginLeft: "60px", transform: "scale(2)" }}
      />
    </>
  );
};

export default NavBarLogin;
