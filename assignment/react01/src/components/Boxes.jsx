import styled from "styled-components";
import LikeButton from "./LikeButton";
import { dummy } from "../dummy";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import 냉면 from "../images/냉면.jpeg";
import 콩국수 from "../images/콩국수.jpeg";
import 화채 from "../images/화채.jpeg";

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
  flex-direction: column;
  justify-content: end;
`;
const BoxLink = styled(Link)`
  display: block;
  background-color: #d9d9d9;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding: 5px 0;
  :hover {
    background-color: #c9c9c9;
    font-weight: bold;
  }
`;
const TextBox = styled.div`
  background-color: rgb(47, 62, 81, 0.8);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
`;

function Boxes() {
  const [items, setItems] = useState();
  const [isLoading, setIsloading] = useState(true);
  const getItems = async () => {
    const res = await axios.get(
      "https://75934015-08c9-4e35-a6e5-3adf0777844c.mock.pstmn.io/items"
    );
    const data = await res.data;
    setItems(data);
    setIsloading(false);
  };
  useEffect(() => {
    getItems();
  }, []);

  const images = [냉면, 콩국수, 화채];

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {items.map((el, index) => (
            <Box key={el.id} image={images[index]}>
              <TextBox>
                <span>{el.desc}</span>
                <LikeButton buttonIndex={index} len={dummy.length} />
              </TextBox>
              <BoxLink to={`/${el.id}`} state={{ item: el }}>
                상세페이지로 이동
              </BoxLink>
            </Box>
          ))}
        </>
      )}
    </Container>
  );
}

export default Boxes;
