import { useEffect, useState } from "react";

const AuthorizationTest = () => {
  const [authorized, setAuthorized] = useState(false);
  const [serverData, setServerData] = useState();

  useEffect(() => {
    fetch("../main", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + window.localStorage.getItem("authorizationToken"),
      },
    })
      .then((response) => {
        return response.ok;
      })
      .then((auth) => {
        setAuthorized(auth);
      });
    fetch("../api", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + window.localStorage.getItem("authorizationToken"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setServerData(data));
  }, []);

  const log = () => {
    return console.log(serverData);
  };

  return (
    <div className="bg-black">
      {authorized ? <div>hello world</div> : <div>Un authorized</div>}
      <button onClick={log}>TEST</button>
      <div>
        {serverData
          ? serverData.map((el) => {
              return <div>{el.topic}</div>;
            })
          : ""}
      </div>
    </div>
  );
};

export default AuthorizationTest;
