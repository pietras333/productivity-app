import { useState } from "react";

const AuthorizationTest = () => {
  const [data, setData] = useState(null);
  fetch("/main")
    .then((data) => data.json())
    .then((data) => console.log(data));
  return <div className="text-black">hello world</div>;
};

export default AuthorizationTest;
