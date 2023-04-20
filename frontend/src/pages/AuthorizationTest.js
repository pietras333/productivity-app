import { useEffect } from "react";

const AuthorizationTest = () => {
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
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        console.log("data ===", data);
        console.log("DATA STORED");
      })
      .catch((error) => {
        console.log("error: " + error);
        this.setState({ requestFailed: true });
      });
  }, []);

  return <div className="text-black">hello world</div>;
};

export default AuthorizationTest;
