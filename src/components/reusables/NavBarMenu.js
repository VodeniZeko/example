import React, { useState, useEffect } from "react";
import { NavbarContainer } from "../../styles/styledComponents";
import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => setCheck(true), 1000);
  }, []);

  return (
    <NavbarContainer className="animated bounceInDown">
      <nav class="item-menu">
        <input
          type="checkbox"
          onChange={event => setCheck(event.currentTarget.checked)}
          checked={check}
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label id="menu-open-handler" class="menu-open-button" for="menu-open">
          <img
            alt="profile"
            style={{ width: 40, verticalAlign: "top", borderRadius: "inherit" }}
            src={require("./../../assets/images/logo.jpg")}
          />
        </label>
        <div class="real-menu">
          <span class="menu-item" data-name="Home">
            <NavLink to="/">
              <i class="fas fa-home"></i>
            </NavLink>
          </span>

          <span class="menu-item" data-name="Photo">
            <NavLink to="/">
              <i class="fa fa-image"></i>
            </NavLink>
          </span>

          <span class="menu-item" data-name="Create Project">
            <NavLink to="/">
              <i class="fas fa-tasks"></i>
            </NavLink>
          </span>

          <span class="menu-item" data-name="Code">
            <NavLink to="/">
              <i class="fa fa-code"></i>
            </NavLink>
          </span>

          <span class="menu-item" data-name="Profile">
            <NavLink to="/">
              <i class="far fa-user"></i>
            </NavLink>
          </span>
        </div>
      </nav>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ width: 0, height: 0 }}
      >
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </NavbarContainer>
  );
};

export default NavBarMenu;
