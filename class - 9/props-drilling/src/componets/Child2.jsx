import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Child2 = () => {
  const { user, age, place = "chennai" } = useContext(UserContext);

  console.log("Child2 - ", place);
  return (
    <div>
      Child2 - {user} - {age} - {place}
    </div>
  );
};

export default Child2;
