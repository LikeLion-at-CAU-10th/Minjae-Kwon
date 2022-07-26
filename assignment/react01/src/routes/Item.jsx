import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackBtn = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-top: 0;
  }
  img {
    width: 300px;
    height: 300px;
  }
  p {
    font-weight: bold;
  }
`;

function Item() {
  const location = useLocation();
  const item = location.state.item;
  let price;
  item.onSale ? (price = item.price * 0.7) : (price = item.price);

  return (
    <>
      <Container>
        <BackBtn to={"/"}>홈으로 이동</BackBtn>
        <h1>{item.name}</h1>
        {item.onSale ? <h3>!특가! 30% 할인 진행중!!</h3> : <></>}
        <img src={item.image} alt={item.name} />
        <p>가격 : {price}</p>
        <span>{item.desc}</span>
      </Container>
    </>
  );
}

export default Item;
