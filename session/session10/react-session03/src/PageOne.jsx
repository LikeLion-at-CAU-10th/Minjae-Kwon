import React from "react";
import BlueBox from "./BlueBox";

const pageOne = () => {
  let count = 0;
  const countUp = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <div>Page One</div>
      <BlueBox title="Button" btnColor="blue" />
    </>
  );
};

export default pageOne;
