import 냉면 from "./images/냉면.jpeg";
import 콩국수 from "./images/콩국수.jpeg";
import 화채 from "./images/화채.jpeg";
import styled from "styled-components";
import LikeButton from "./LikeButton";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  background-color: rgb(244, 244, 246);
  width: min-content;
  padding: 10px;
`;
const Box = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
  display: flex;
  align-items: end;
`;
const TextBox = styled.div`
  background-color: rgb(47, 62, 81, 0.8);
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
`;

function Boxes() {
  const images = [냉면, 콩국수, 화채];
  const texts = ["새콤달콤 냉면", "고소한 콩국수", "달달한 화채"];

  return (
    <Container>
      {images.map((image, index) => (
        <Box key={index} image={image}>
          <TextBox>
            <span>{[texts[index]]}</span>
            <LikeButton buttonIndex={index} len={images.length} />
          </TextBox>
        </Box>
      ))}
    </Container>
  );
}

export default Boxes;
