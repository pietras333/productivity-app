import { useState, useEffect } from "react";

const TEST = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [usernameCorectness, setUsernameCorectness] = useState(true);
  const [passwordCorectness, setPasswordCorectness] = useState(true);
  const [loginRes, setLoginRes] = useState({});
  const [registerRes, setRegisterRes] = useState({});

  const usernameInfo = [
    "Username can't contain special characters",
    "Username already taken",
  ];

  const corectnessCheck = (str) => {
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return special.test(str);
  };

  useEffect(() => {
    // setUsernameCorectness(!corectnessCheck(username));
    // setPasswordCorectness(corectnessCheck(password));
    // console.log("loginRes ===", loginRes);
    // console.log("registerRes ===", registerRes);
    console.log("first name ===", firstName);
  });

  // SIMULATE LOGIN OR REGISTER
  const handleLogin = async () => {
    await fetch("../api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        method: "sign-in",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginRes({ data });
      });
  };

  const handleRegister = async () => {
    await fetch("../api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        method: "register",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRegisterRes({ data });
      });
  };

  return (
    <>
      <div className="bg-[#121212] flex justify-center w-full h-full">
        <div className="w-[80%] bg-[#151515] border-l-2 border-r-2 border-lime-500">
          <div className="flex justify-center">
            <h1 className="text-7xl tracking-widest font-bold text-lime-500 mt-2">
              authentication
            </h1>
          </div>
          {/* SIMULATION OF LOGIN AND REGISTER */}
          <div className="bg-[#353535] flex justify-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-5 flex justify-center items-center flex-col">
                <h2 className="text-white">Pass your first name</h2>
                <input
                  className="text-black"
                  type="text"
                  placeholder="First name..."
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <h2 className="text-white">Pass your last name</h2>
                <input
                  className="text-black"
                  type="text"
                  placeholder="Last name..."
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <h2 className="text-white">Pass your email</h2>
                <input
                  className="text-black"
                  type="text"
                  placeholder="Username..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="flex justify-center items-center flex-col">
                  <h2 className="text-white">Pass your password</h2>
                  <input
                    className="text-black "
                    type="password"
                    placeholder="Psst..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="mt-2 mb-2 bg-lime-500 p-2 text-lg rounded-lg"
              >
                Sign In
              </button>
              <button
                onClick={handleRegister}
                className="mt-2 mb-2 bg-lime-500 p-2 text-lg rounded-lg"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TEST;
