import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCars } from "../feature/car/carSlice";
// import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const cars = useSelector(selectCars);
  console.log(cars);
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="google.com">
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="google.com">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="google.com">Shop</a>
        <a href="google.com">Tesla Account</a>
        <CustomeMenu onClick={() => setBurgerStatus(true)}>X</CustomeMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomeClose onClick={() => setBurgerStatus(false)}>
            {" "}
            X{" "}
          </CustomeClose>
        </CloseWraper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="google.com">{car}</a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
margin-top: 10px;
top:0;
left:0;
right:0;
z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomeMenu = styled.div`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomeClose = styled.div`
  cursor: pointer;
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
