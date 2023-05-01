import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logoPizza from '../../img/logoPizza.jpg'

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 29.998px;
  display: flex;
  background-color: red;
  justify-content: space-between;
  align-items: center;
  .logo{
    display: flex;
    align-items: center;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logoPizza} alt="s" width="48px"/>
        <h3>DinerM4</h3>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
