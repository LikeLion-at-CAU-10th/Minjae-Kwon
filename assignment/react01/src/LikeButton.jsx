import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;
const Button = styled.button`
  border: 0;
  background-color: transparent;
  color: red;
`;

function LikeButton({ buttonIndex, len }) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(0);
  }
  const [likes, setLikes] = useState(arr);
  const onClick = () => {
    setLikes(
      likes.map((like, index) => (index === buttonIndex ? like + 1 : like))
    );
  };

  return (
    <>
      {
        <Container>
          <Button onClick={onClick}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <p>{likes[buttonIndex]}</p>
        </Container>
      }
    </>
  );
}

export default LikeButton;
