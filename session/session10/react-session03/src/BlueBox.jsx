import React, { useState } from "react";
import styled from "styled-components";

const BlueContainer = styled.button`
  background-color: ${(props) => props.btnColor};
  width: 100px;
  height: 100px;
`;

const BlueBox = ({ btnColor }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((c) => c + 1); // setcount()의 인자가 무엇이든 상관없이 실행. 이방법이 더 안전.
    // setCount((c) => c + 1); // 함수 형태로 인자를 넣어주면 값을 받아야 실행되므로 동기적으로 실행되는듯..?
    // setCount((c) => c + 1);
    // setCount(count + 1); // 이렇게 하면 3씩 증가가 안됨! setCount는 엄밀히 말하면 count를 직접 변경시키는게 아니라, _value(가칭)라는 외부 변수를 변경 시켜서 그걸 다시 count에 할당하는 것이기 때문
    // setCount(count + 1); // 즉, setCount()를 내부적으로 뜯어보면 setCount(newValue) => {_value = newValue}와 같은 형태.
    // setCount(count + 1); // 이건 비동기적으로 실행돼서 count값의 변화가 반영이 안됨. (js는 기본적으로 비동기)
  };

  return (
    <>
      <BlueContainer btnColor={btnColor} onClick={countUp}>
        버튼<p>count: {count}</p>
      </BlueContainer>
    </>
  );
};

export default BlueBox;
