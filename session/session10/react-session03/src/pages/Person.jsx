import React from "react";
import data from "../db/data";
import { useLocation, useParams } from "react-router-dom";

function Person() {
  const { nickname } = useParams();
  const location = useLocation();
  const member = location.state.member;

  // fetching 한번 더해서 filter를 이용하는 방식.
  const who = data.members.filter((e) => e.nickname === nickname)[0];

  return (
    <>
      <h3>{member.nickname}의 상세페이지</h3>
      <ul>
        <li>name: {member.name}</li>
        <li>memId: {member.memId}</li>
        <li>rold: {member.role}</li>

        <li>description: {member.description}</li>
      </ul>
    </>
  );
}

export default Person;
