import styled from "styled-components";

////////////////////
export const NavbarContainer = styled.div`
  body {
    background: #ffffff;
    color: #585858;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  span {
    color: inherit;
  }
  h1 {
    font-weight: 300;
    padding-top: 20px;
    margin: 20px 0;
  }
  .inspiration {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .item-menu {
    padding-top: 20px;
    box-sizing: border-box;
    font-size: 40px;
    text-align: center;
    filter: url("#shadowed-goo");
  }
  .item-menu .real-menu {
    transform: translate3d(0, -65px, 0);
    transition: transform ease-out 200ms;
  }
  .item-menu .menu-item {
    background: #ffa500;
    border-radius: 100%;
    width: 120px;
    height: 80px;
    color: white;
    line-height: 80px;
    text-align: center;
    transition: transform ease-out 200ms;
    display: inline-block;
    position: relative;
  }
  .item-menu .menu-open-button {
    background: #12cc66;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    color: white;
    text-align: center;
    line-height: 80px;
    transition: transform ease-out 200ms;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
  }
  .item-menu .menu-open {
    display: none;
  }
  .item-menu .plus.plus-1 {
    transform: rotate(90deg) translate3d(0, 0, 0);
  }
  .item-menu .plus.plus-2 {
    transform: rotate(0) translate3d(0, 0, 0);
  }
  .item-menu .menu-item:hover {
    background: white;
  }
  .item-menu .menu-item:nth-child(1) {
    transition-duration: 70ms;
    transform: translate3d(171px, 0, 0) scale(0);
  }
  .item-menu .menu-item:nth-child(2) {
    transition-duration: 130ms;
    transform: translate3d(85.5px, 0, 0) scale(0);
  }
  .item-menu .menu-item:nth-child(3) {
    transition-duration: 190ms;
    transform: translate3d(0, 0, 0) scale(0);
  }
  .item-menu .menu-item:nth-child(4) {
    transition-duration: 130ms;
    transform: translate3d(-85.5px, 0, 0) scale(0);
  }
  .item-menu .menu-item:nth-child(5) {
    transition-duration: 70ms;
    transform: translate3d(-171px, 0, 0) scale(0);
  }
  .item-menu .menu-item:after {
    content: attr(data-name);
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    font-family: monospace;
    color: #12cc66;
    line-height: 30px;
    left: 50%;
    white-space: nowrap;
    transform: translate3d(-50%, 0, 0);
    display: none;
  }

  .item-menu .menu-open-button {
    z-index: 2;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.5, 1.5) translate3d(0, 0, 0);
    cursor: pointer;
  }
  .item-menu .menu-open-button:hover {
    transform: scale(1.8, 1.8) translate3d(0, 0, 0);
  }
  .item-menu .menu-open:checked + .menu-open-button {
    transition-timing-function: linear;
    transition-duration: 200ms;
    transform: rotate(-45deg) translate3d(-7px, 6px, 0);
  }
  .item-menu .menu-open:checked ~ .real-menu {
    transform: translate3d(0, 0, 0);
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item {
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transform: translate3d(0, 0, 0);
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:nth-child(1) {
    transition-duration: 320ms;
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:nth-child(2) {
    transition-duration: 240ms;
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:nth-child(3) {
    transition-duration: 160ms;
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:nth-child(4) {
    transition-duration: 240ms;
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:nth-child(5) {
    transition-duration: 320ms;
  }
  .item-menu .menu-open:checked ~ .real-menu .menu-item:after {
    display: block;
  }
`;
