import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnLink = styled(Link)`
  background-color: ${(props) => props.btncolor};
  color: #fff;
  border-radius: 20px;
  text-decoration: none;
  margin-right: 10px;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid black;
`;

function NavBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <BtnLink btncolor={"blue"} to={"/"}>
        Home
      </BtnLink>
      <BtnLink btncolor={"green"} to={"/about"}>
        About
      </BtnLink>
      <BtnLink btncolor={"purple"} to={"/love"}>
        Love
      </BtnLink>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </div>
    </Container>
  );
}

export default NavBar;
