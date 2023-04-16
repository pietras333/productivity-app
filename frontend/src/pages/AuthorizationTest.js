const AuthorizationTest = async () => {
  await fetch("../main/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + window.localStorage.getItem("authorizationToken"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data ===", data);
    });

  return <div className="text-black">hello world</div>;
};

export default AuthorizationTest;
