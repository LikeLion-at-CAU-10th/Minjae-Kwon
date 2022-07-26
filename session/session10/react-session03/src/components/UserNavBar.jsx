import React from "react";
import data from "../db/data";
import { Link } from "react-router-dom";

function UserNavBar() {
  const members = data.members;

  return (
    <div>
      <h2>User NavBar</h2>
      <ul>
        {members.map((e) => (
          <li key={e.memId}>
            <Link state={{ member: e }} to={e.nickname}>
              {e.nickname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserNavBar;
