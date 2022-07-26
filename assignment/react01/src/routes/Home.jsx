import Boxes from "../components/Boxes";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Container>
      <h1>여름 음식 월드컵</h1>
      <h3>by 권민재</h3>
      <Boxes />
    </Container>
  );
}

export default Home;
