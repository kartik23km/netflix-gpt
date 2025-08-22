import * as React from "react";
import Browse from "./Browse";
import Login from "./Login";

interface BodyProps {}

const Body: React.FunctionComponent<BodyProps> = (props) => {
  return (
    <div>
      <Login />
      <Browse />
    </div>
  );
};

export default Body;
